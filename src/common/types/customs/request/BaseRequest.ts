export type BaseRequest<Data> = {
  page?: string
  limit?: string
  optional?: Data
}

export type GeneratedBaseRequest<Data> = {
  page: number
  limit?: number
  offset: number
  optional?: Data
}