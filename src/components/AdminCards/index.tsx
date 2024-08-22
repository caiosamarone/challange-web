import { Button, Card } from 'antd'

import { CurrentSelected } from '~/pages'
const { Meta } = Card

export interface AdminCardProps {
  onSelectCard: (selected: CurrentSelected) => void
}

export const AdminCards = ({ onSelectCard }: AdminCardProps) => {
  return (
    <div className="flex justify-around flex-col md:flex-row gap-5 items-center my-6">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="gyms"
            className="h-[200px]"
            src="https://pictures.smartfit.com.br/4716/big/smart-fit-academia-unidade-agua_verde-parana-equipamento-area-cardiovascular-esteira-eliptico-transport.jpg?1653332654"
          />
        }
        actions={[
          <Button onClick={() => onSelectCard('GYMS')}>
            Gerenciar Academias
          </Button>
        ]}
      >
        <Meta
          title="Academias"
          description="Gerencie academias que usuarios podem fazer check-in"
        />
      </Card>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="users"
            className="h-[200px]"
            src="https://academiabefit.com.br/wp-content/uploads/2022/06/7-dicas-para-ter-melhores-resultados-na-academia-scaled.jpg"
          />
        }
        actions={[
          <Button onClick={() => onSelectCard('USERS')}>
            Gerenciar Usuarios
          </Button>
        ]}
      >
        <Meta
          title="Usuarios"
          description="Gerencie usuarios que realizam check-in"
        />
      </Card>
    </div>
  )
}
