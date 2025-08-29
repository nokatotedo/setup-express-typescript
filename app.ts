import express, { Application } from "express";
import { env } from "./src/common/helpers/env.helper";
import cors from "cors"
import error from "./src/middlewares/error.middleware";
import index from "./src/routes/index.route";
const app: Application = express()

;(async () => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({
    extended: true
  }))

  app.get("/", (_, res) => {
    res.status(200).send("belajar express")
  })

  app.get("/check-health", (_, res) => {
    res.status(200).send("checking...")
  })

  app.use(index.router)

  app.all("*", (_, res) => {
    res.status(404).send("maintenance")
  })

  app.use(error.handler)
  
  const port = env.PORT
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
})()