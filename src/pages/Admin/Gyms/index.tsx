import { EditOutlined, PlusSquareOutlined } from '@ant-design/icons'
import { Button, Card, Table, TableProps, Tooltip, Typography } from 'antd'
import { useEffect } from 'react'

import { IGym } from '~/interfaces'
import { CurrentSelected } from '~/pages'

import { GymForm } from './gym-form'
import { useGyms } from './useGyms'

interface GymsProps {
  onSelectCard: (selected: CurrentSelected) => void
}
export const Gyms = ({ onSelectCard }: GymsProps) => {
  const {
    fetchGyms,
    gyms,
    loading,
    toggleModal,
    modalVisbile,
    curItem,
    handleUpdate,
    fetchCreateGym,
    fetchUpdateGym,
    handleClose
  } = useGyms()

  useEffect(() => {
    fetchGyms()
  }, [])

  const columns: TableProps['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'title'
    },
    {
      title: 'Telefone',
      dataIndex: 'phone'
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      align: 'center',
      width: 100,
      render: (value, record: IGym.Item) => (
        <Tooltip title="Editar">
          <Button
            icon={<EditOutlined size={20} />}
            type="text"
            onClick={() => handleUpdate(record)}
          />
        </Tooltip>
      )
    }
  ]
  const tableProps: TableProps<IGym.Item> = {
    columns,
    dataSource: gyms,
    loading,
    pagination: {
      pageSize: 5
    }
  }

  return (
    <div className="min-w-[600px]">
      <Card className="my-4">
        <Typography.Title className="font-poppins text-center pb-4" level={3}>
          Gerenciar academias
        </Typography.Title>

        <Table {...tableProps} />
      </Card>
      <div className="flex gap-3 justify-end">
        <Button onClick={() => onSelectCard('NONE')}>Voltar</Button>
        <Button type="primary" className="bg-[#001f3f]" onClick={toggleModal}>
          Adicionar
        </Button>
      </div>
      {modalVisbile && (
        <GymForm
          loading={loading}
          handleClose={handleClose}
          curItem={curItem}
          onCreate={fetchCreateGym}
          onUpdate={fetchUpdateGym}
        />
      )}
    </div>
  )
}
