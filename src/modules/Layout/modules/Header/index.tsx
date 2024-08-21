import { Typography } from 'antd'

export const Header = () => {
  return (
    <header className="min-h-12 bg-gray-50 p-4 ">
      <div className="flex flex-row items-center gap-4">
        <Typography.Title level={4}>
          Template React 18 - Tailwind - Antd
        </Typography.Title>
      </div>
    </header>
  )
}
