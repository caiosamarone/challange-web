import { Button, Card, Form, Input, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '~/hooks/useAuth'
import { validateEmail } from '~/utils'

export const Login = () => {
  const navigate = useNavigate()
  const { onLogin } = useAuth()
  const [form] = Form.useForm()

  const onSend = async (data) => {
    const { email, password } = data
    const role = await onLogin(email, password)
    navigate(role === 'ADMIN' ? '/admin' : '/home')
  }

  return (
    <div className="grid place-content-center pt-[calc(100vh/2-200px)]">
      <Card
        title="Entre com sua conta Checkfy!"
        bordered
        bodyStyle={{
          minWidth: 400
        }}
      >
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
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input placeholder="Senha" size="large" />
          </Form.Item>

          <div className="w-full flex justify-end flex-col items-end gap-2">
            <a href="" className="underline">
              Criar minha conta
            </a>
            <Button htmlType="submit"> Entrar</Button>
            <Typography.Text className="font-normal font-poppins">
              Testee
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  )
}
