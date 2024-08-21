export type Role = 'ADMIN' | 'USER'

export interface AuthResponse {
  permission: Role
  name: string
  userId: string
}
