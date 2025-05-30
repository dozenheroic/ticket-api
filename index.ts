import dotenv from "dotenv";
import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import cors from "@elysiajs/cors";
import { Router } from "./scr/routers/Router";

class API {
  private app = new Elysia({ adapter: node() });

  constructor() {
    dotenv.config();
    this.useMiddlewares();
    this.useRoutes();
    this.init().then(() =>
      console.log(`Server running at: ${process.env.PORT}`)
    );
  }

  private useMiddlewares() {
    this.app.use(cors());
  }

  private useRoutes() {
    this.app.group("/tickets", (app) => app.use(Router.tickets));
  }

  async init() {
    this.app.listen(process.env.PORT || 5000);
  }
}

new API();
