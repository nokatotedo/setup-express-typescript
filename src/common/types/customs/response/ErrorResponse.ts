import { ErrorRequestHandler } from "express";

export enum ErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum ErrorName {
  INTERNAL_SERVER_ERROR = "InternalServerError",
  FORBIDDEN = "Forbidden",
  UNAUTHORIZED = "Unauthorized",
  BAD_REQUEST = "BadRequest",
  NOT_FOUND = "NotFound",
  ZOD_ERROR = "ZodError"
}

export enum ErrorMessage {
  INTERNAL_SERVER_ERROR = "Don't worry, it's not you. We're having some temporary server trouble",
  NOT_FOUND = "Data not found",
  FORBIDDEN = "Forbidden, please try again",
  UNAUTHORIZED = "Unauthorized, please login again",
  BAD_REQUEST = "Please enter a valid data"
}

export type Issues = {
  path: string | string[]
  message: string
}

export interface ErrorResponse extends ErrorRequestHandler {
  name: ErrorName
  issues?: Issues[]
}