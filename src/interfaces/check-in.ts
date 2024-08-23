export interface ICheckInParams {
  gymId: string
  userId: string
}

export interface Item {
  id: string
  created_at: string
}

export interface ICheckInSearchResponse {
  checkIn: Item
}
