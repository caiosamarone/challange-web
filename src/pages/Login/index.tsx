import { Button, Card, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import { Container } from '~/components'
import { useAuth } from '~/hooks/useAuth'
import { validateEmail } from '~/utils'

export const Login = () => {
  const navigate = useNavigate()
  const { onLogin } = useAuth()
  const [form] = Form.useForm()

  const onSend = async (data) => {
    const { email, password } = data
    const role = await onLogin(email, password)
    if (!role) {
      return
    }
    navigate(role === 'ADMIN' ? '/admin' : '/home')
  }

  return (
    <Container title="Login">
      <Typography.Title level={5} className="font-poppins">
        Bem vindo a plataforma de check-ins Checkfy!
      </Typography.Title>
      <Typography.Text className="font-notosans text-zinc-400">
        Faça check-in na academia mais próxima e melhore sua saúde!
      </Typography.Text>
      <Form
        layout="vertical"
        className="mt-8 mb-12 w-80"
        form={form}
        onFinish={onSend}
      >
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
          rules={[{ required: true, message: 'Insira uma senha' }]}
        >
          <Input placeholder="Senha" size="large" />
        </Form.Item>

        <div className="w-full flex justify-start flex-col items-start  gap-2 pt-4">
          <Link to="/create-account" className="text-blue-900">
            Criar minha conta
          </Link>

          <Button htmlType="submit"> Entrar</Button>
        </div>
      </Form>
    </Container>
  )
}
