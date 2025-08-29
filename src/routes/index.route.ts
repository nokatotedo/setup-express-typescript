import { Route } from "../common/types/@classes";
import ExampleRoute from "./example.route";

class IndexRoute extends Route {
  protected initialize(): void {
    this.router.use("/example", ExampleRoute.router)
  }
}

export default new IndexRoute()