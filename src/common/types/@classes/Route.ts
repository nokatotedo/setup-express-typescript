import express, { Router } from "express";

export default abstract class Route {
  public router: Router
  
  constructor() {
    this.router = express.Router({ mergeParams: true })
    this.initialize()
  }

  protected abstract initialize(): void
}