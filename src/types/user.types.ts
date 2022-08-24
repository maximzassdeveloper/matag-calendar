export interface IUser {
  id: number
  username: string
}

export interface IAuthFields {
  username: string
  password: string
}

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}