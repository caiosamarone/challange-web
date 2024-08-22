export interface Item {
  title: string
  description: string
  phone: string
  id: string
}
export interface CreateGymParams extends Omit<Item, 'id'> {}
export interface UpdateGymParams extends Item {}

export interface GetAllGymResponse {
  data: Item[]
}
