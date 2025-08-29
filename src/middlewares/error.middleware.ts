import { NextFunction as NextExpress, Request as RequestExpress, Response as ResponseExpress } from "express";
import { ErrorCode, ErrorMessage, ErrorName, ErrorResponse } from "../common/types/customs/response/ErrorResponse";
import { Response } from "../common/types/@classes";

export default class ErrorMiddleware {
  public static handler(
    err: ErrorResponse,
    _: RequestExpress,
    res: ResponseExpress,
    __: NextExpress
  ) {
    let code: ErrorCode
    let message: string | null

    console.log("Error => " + err)
    
    switch (err.name) {
      case ErrorName.BAD_REQUEST:
      case ErrorName.ZOD_ERROR:
        code = ErrorCode.BAD_REQUEST
        message = err.issues ? err.issues[0].message : ErrorMessage.BAD_REQUEST
        break
      case ErrorName.UNAUTHORIZED:
        code = ErrorCode.UNAUTHORIZED
        message = ErrorMessage.UNAUTHORIZED
        break
      case ErrorName.FORBIDDEN:
        code = ErrorCode.FORBIDDEN
        message = ErrorMessage.FORBIDDEN
      break
      case ErrorName.NOT_FOUND:
        code = ErrorCode.NOT_FOUND
        message = err.issues ? err.issues[0].message : ErrorMessage.NOT_FOUND
        break
      default:
        code = ErrorCode.INTERNAL_SERVER_ERROR
        message = ErrorMessage.INTERNAL_SERVER_ERROR
        break
    }

    new Response(
      null
    )
      .customCode(code)
      .customMessage({
        dev: {
          name: err.name,
          problems: err.issues ? err.issues.map((e) => {
            return {
              path: typeof e.path === "string" ? e.path : e.path.join("-"),
              message: e.message
            }
          }) : []
        },
        user: message
      })
      .build(res)
  }
}