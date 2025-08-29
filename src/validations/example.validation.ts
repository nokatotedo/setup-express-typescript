import z from "zod";
import IndexValidation from "./index.validation";

const ExampleValidation = IndexValidation.init({
  name: z.string().min(1, { message: "Name is required" })
})

export default ExampleValidation
export type ExampleSchema = z.infer<typeof ExampleValidation["schema"]>