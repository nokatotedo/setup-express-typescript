import { Response as RequestExpress } from "express";
import { BaseListResponse, BaseResponse } from "../customs/response/BaseResponse";
import { SuccessCode, SuccessMessage } from "../customs/response/SuccessResponse";
import { ErrorCode, ErrorMessage, ErrorName, Issues } from "../customs/response/ErrorResponse";

export default class Response<Data> {
  private readonly response: BaseResponse<Data>

  constructor(data: Data) {
    this.response = {
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      message: {
        dev: {
          name: ErrorName.INTERNAL_SERVER_ERROR,
          problems: []
        },
        user: ErrorMessage.INTERNAL_SERVER_ERROR
      },
      data: data
    }
  }

  public customCode(code: SuccessCode | ErrorCode) {
    this.response.code = code
    return this
  }

  public customMessage(message: {
    dev: {
      name: string,
      problems: any[]
    },
    user: string
  }) {
    this.response.message = message
    return this
  }

  public withOverview(overview: any) {
    this.response.overview = overview
    return this
  }

  public success(code: SuccessCode.CREATED, message: string): this
  public success(code: Exclude<SuccessCode, SuccessCode.CREATED>, message?: string): this
  public success(code: SuccessCode, message?: string) {
    this.response.code = code
    const name = code === SuccessCode.CREATED ? SuccessMessage.CREATED : SuccessMessage.OK
    
    this.response.message = {
      dev: {
        name: name,
        problems: []
      },
      user: message ?? name
    }
    return this
  }

  public build(res: RequestExpress) {
    res.status(this.response.code).json(this.response)
    return this.response
  }
}

export class List<Data> {
  private readonly response: BaseListResponse<Data[]>
  
  constructor(data: Data[]) {
    this.response = {
      page: 1,
      totalData: data.length,
      totalPage: 1,
      list: data
    }
  }

  public customPage(page: number) {
    this.response.page = page
    return this
  }

  public customTotalData(totalData: number) {
    this.response.totalData = totalData
    return this
  }

  public customTotalPage(totalPage: number) {
    this.response.totalPage = totalPage
    return this
  }

  public build() {
    return this.response
  }
}

export function error(name: ErrorName.BAD_REQUEST, issues: Issues[]): { name: ErrorName.BAD_REQUEST; issues: Issues[] }
export function error(name: ErrorName.NOT_FOUND, issues: Issues[]): { name: ErrorName.NOT_FOUND; issues: Issues[] }
export function error(name: Exclude<ErrorName, ErrorName.BAD_REQUEST | ErrorName.NOT_FOUND>): { name: ErrorName }

export function error(name: ErrorName, issues?: Issues[]) {
  if (issues) {
    return { name, issues };
  } else {
    return { name };
  }
}