import { Button, Form, Input, Modal } from 'antd'
import { useEffect } from 'react'

import { IGym } from '~/interfaces'

interface GymFormProps {
  curItem?: IGym.Item
  handleClose: () => void
  onCreate: (data: IGym.CreateGymParams) => Promise<void>
  onUpdate: (data: IGym.UpdateGymParams) => Promise<void>
  loading: boolean
}

export const GymForm = ({
  curItem,
  handleClose,
  onCreate,
  onUpdate,
  loading
}: GymFormProps) => {
  const [form] = Form.useForm()
  const isAdd = !curItem
  console.log(loading)
  useEffect(() => {
    if (curItem) {
      form.setFieldsValue({
        title: curItem.title,
        description: curItem.description,
        phone: curItem.phone
      } as IGym.Item)
    }
  }, [curItem])

  const handleSubmit = async (data: IGym.Item) => {
    if (isAdd) {
      await onCreate(data)
    } else {
      await onUpdate({ ...data, id: curItem.id })
    }
  }
  const handleCancel = () => {
    form.resetFields()
    handleClose()
  }
  return (
    <Modal
      open
      title={`${isAdd ? 'Cadastrar' : 'Editar'} academia`}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button
          key="send"
          type="primary"
          form="formGym"
          htmlType="submit"
          loading={loading}
        >
          {isAdd ? 'Cadastrar' : 'Salvar'}
        </Button>
      ]}
      onCancel={handleCancel}
    >
      <Form id="formGym" form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="title"
          label="Nome da Academia"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          hasFeedback
          rules={[{ required: true }]}
          label="Descrição"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefone"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
