export enum SuccessCode {
  OK = 200,
  CREATED = 201
}

export type SuccessUpload = {
  url: string
  filename: string
}

export enum SuccessMessage {
  OK = "Success",
  CREATED = "Created"
}