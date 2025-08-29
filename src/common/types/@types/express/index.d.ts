declare namespace Express {
  interface Request {
    auth: {
      id: string
      username: string
      iat: number
      exp?: number
    }
  }
}