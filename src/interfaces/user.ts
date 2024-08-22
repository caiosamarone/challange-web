export interface CreateUserParams {
  user: string
  password: string
  name: string
}

export interface Item {
  email: string
  name: string
  id: string
}

export interface GetAllUsersResponse {
  data: Item[]
}
