import { Card } from 'antd'

interface ContainerParams {
  children: React.ReactNode
  title?: string
  minWidth?: number
  minHeight?: number
}

export const Container = ({
  children,
  title,
  minWidth = 400,
  minHeight
}: ContainerParams) => {
  return (
    <div className="grid place-content-center pt-[5rem]">
      <Card
        title={title}
        bordered
        bodyStyle={{
          minWidth,
          minHeight
        }}
      >
        {children}
      </Card>
    </div>
  )
}
