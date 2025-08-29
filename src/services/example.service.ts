import ExampleValidation, { ExampleSchema } from "../validations/example.validation"

export default class ExampleService {
  public static async post(input: ExampleSchema) {
    try {
      const data = ExampleValidation.parse(input)
      return data
    } catch (error) {
      throw error
    }
  }
}