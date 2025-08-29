import { z, ZodObject, ZodRawShape } from "zod";

export default class IndexValidation<Data extends ZodRawShape> {
  public readonly schema: ZodObject<Data>

  private constructor(schema: ZodObject<Data>) {
    this.schema = schema
  }

  public static init(): IndexValidation<{}>
  public static init<Schema extends ZodRawShape>(schema: Schema): IndexValidation<Schema>
  public static init<Schema extends ZodRawShape>(schema: Schema = {} as Schema) {
    return new IndexValidation(z.object(schema))
  }

  // private withField<Field extends string, Schema extends ZodType>(
  //   field: Field,
  //   schema: Schema
  // ): IndexValidation<Data & { [FieldName in Field]: Schema }> {
  //   return new IndexValidation(z.object({
  //     ...this.schema.shape,
  //     [field]: schema
  //   }) as ZodObject<Data & { [FieldName in Field]: Schema }>)
  // }

  public parse(data: any) {
    return this.schema.parse(data)
  }

  public safeParse(data: any) {
    return this.schema.safeParse(data)
  }
}