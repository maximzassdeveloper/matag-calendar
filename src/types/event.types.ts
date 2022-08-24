export interface IEvent {
  id: number
  name: string
  slug: string
  description?: string
  expiry: Date
  withoutTime: boolean
  order?: number

  userId: number
  categoryId: number
  category: ICategory
}

export interface ICategory {
  id: number
  slug: string
  name: string
  color: string
}