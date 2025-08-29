import { NextExpress, RequestExpress, ResponseExpress } from ".";
import { Response } from "../common/types/@classes";
import { SuccessCode } from "../common/types/customs/response/SuccessResponse";
import ExampleService from "../services/example.service";

export default class ExampleHandler {
  public static async post(req: RequestExpress, res: ResponseExpress, next: NextExpress) {
    try {
      const response = await ExampleService.post(req.body)
      new Response(response)
        .success(SuccessCode.OK)
        .build(res)
    } catch (error) {
      next(error)
    }
  }
}