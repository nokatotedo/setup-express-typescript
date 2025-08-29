import { BaseRequest, GeneratedBaseRequest } from "../customs/request/BaseRequest";

export default class Request<Data> {
  private readonly request: BaseRequest<Data>
  
  constructor(input: BaseRequest<Data>) {
    this.request = input
  }

  public build(): GeneratedBaseRequest<Data> {
    const { limit, page, ...rest } = this.request
    const generatedLimit = this.request.limit && !isNaN(Number(this.request.limit)) ? Number(this.request.limit) : undefined
    const generatedPage = this.request.page && !isNaN(Number(this.request.page)) ? Number(this.request.page) : 1
    const generatedOffset = generatedLimit ? generatedLimit * (generatedPage - 1) : 0

    return {
      limit: generatedLimit, 
      page: generatedPage,
      offset: generatedOffset,
      ...rest
    }
  }
}