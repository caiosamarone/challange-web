import { DeleteOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Modal,
  Table,
  TableProps,
  Tooltip,
  Typography
} from 'antd'
import { useEffect } from 'react'

import { IUser } from '~/interfaces'
import { CurrentSelected } from '~/pages'

import { useUsers } from './useUser'

interface UserProps {
  onSelectCard: (selected: CurrentSelected) => void
}
export const Users = ({ onSelectCard }: UserProps) => {
  const { fetchDeleteUser, fetchUsers, users, loading } = useUsers()

  useEffect(() => {
    fetchUsers()
  }, [])

  const modalDelete = (id: string) => {
    Modal.confirm({
      title: 'Excluir usuário',
      content: 'Confirma que deseja excluir o usuário?',
      onOk: async () => await fetchDeleteUser(id)
    })
  }

  const columns: TableProps['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'name'
    },
    {
      title: 'E-mail',
      dataIndex: 'email'
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      align: 'center',
      width: 100,
      render: (value) => (
        <Tooltip title="Deletar">
          <Button
            icon={<DeleteOutlined size={20} />}
            type="text"
            onClick={() => modalDelete(value)}
          />
        </Tooltip>
      )
    }
  ]
  const tableProps: TableProps<IUser.Item> = {
    columns,
    dataSource: users,
    loading,
    pagination: {
      pageSize: 5
    }
  }

  return (
    <div className="min-w-[600px]">
      <Card className="my-4">
        <Typography.Title className="font-poppins text-center pb-4" level={3}>
          Gerenciar usuarios
        </Typography.Title>

        <Table {...tableProps} />
      </Card>
      <div className="flex gap-3 justify-end">
        <Button onClick={() => onSelectCard('NONE')}>Voltar</Button>
      </div>
    </div>
  )
}
