export type BaseResponse<Data> = {
  code: number
  data: Data | null
  message: {
    dev: {
      name: string,
      problems: any[]
    },
    user: string
  }
  overview?: any
}

export type BaseListResponse<Data extends any[]> = {
  page: number,
  totalData: number,
  totalPage: number,
  list: Data
}