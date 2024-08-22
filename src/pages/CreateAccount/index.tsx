import { Button, Card, Form, Input, Typography } from 'antd'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { APIUser } from '~/api'
import { Container } from '~/components'
import { IUser } from '~/interfaces'
import { validateEmail } from '~/utils'
import { handleCatch } from '~/utils/handle-catch'

export const CreateAccount = () => {
  const navigate = useNavigate()

  const [form] = Form.useForm()

  const onSend = async (data: IUser.CreateUserParams) => {
    try {
      const statusCode = await APIUser.createAccount(data)
      if (statusCode == 201) {
        toast.success('Cadastro efetuado! Faça o login para continuar')
        navigate('/login')
      }
    } catch (error) {
      handleCatch(error)
    }
  }

  return (
    <Container>
      <Typography.Title level={5} className="font-poppins">
        Registre-se agora!
      </Typography.Title>
      <Typography.Text className="font-notosans text-zinc-400">
        Insira seus dados para que possamos completar seu cadastro
      </Typography.Text>
      <Form
        layout="vertical"
        className="mt-8 mb-12 w-80"
        form={form}
        onFinish={onSend}
      >
        <Form.Item
          name="name"
          className="mb-8"
          hasFeedback
          rules={[
            {
              required: true,
              min: 3,
              message: 'Insira um nome válido'
            }
          ]}
        >
          <Input placeholder="Nome" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          className="mb-8"
          hasFeedback
          rules={[
            { required: true },
            {
              validator: async (_, value) => validateEmail(value)
            }
          ]}
        >
          <Input placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 6,
              message: 'A senha deve conter ao menos 6 caracteres'
            }
          ]}
        >
          <Input placeholder="Senha" size="large" />
        </Form.Item>
        <div className="flex items-start gap-3 pt-4">
          <Button htmlType="submit"> Cadastrar</Button>
          <Button onClick={() => navigate(-1)}> Voltar</Button>
        </div>
      </Form>
    </Container>
  )
}
