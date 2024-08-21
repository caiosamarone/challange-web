import { Button, Card, Form, Input, Typography } from 'antd'

export const Login = () => {
  return (
    <div className="grid place-content-center pt-[calc(100vh/2-200px)]">
      <Card
        title="Login"
        bordered
        bodyStyle={{
          minWidth: 400
        }}
      >
        <Form layout="vertical">
          <Form.Item name="username">
            <Input placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password" size="large" />
          </Form.Item>

          <div className="w-full flex justify-end flex-col items-end gap-2">
            <a href="" className="underline font-nunito">
              Esqueci minha senha
            </a>
            <Button>Entrar</Button>
            <Typography.Text className="font-normal font-poppins">
              Testee
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  )
}
