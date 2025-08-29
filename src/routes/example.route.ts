import { Route } from "../common/types/@classes";
import ExampleHandler from "../handlers/example.handler";

class ExampleRoute extends Route {
  protected initialize(): void {
    this.router.post("/", ExampleHandler.post)
  }
}

export default new ExampleRoute()