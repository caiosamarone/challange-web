import { Button } from 'antd'

import { CurrentSelected } from '~/pages'

interface UsersProps {
  onSelectCard: (selected: CurrentSelected) => void
}
export const Users = ({ onSelectCard }: UsersProps) => {
  return (
    <div>
      <Button onClick={() => onSelectCard('NONE')}>Voltar</Button>
    </div>
  )
}
