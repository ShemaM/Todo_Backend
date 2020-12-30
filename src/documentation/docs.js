import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";

const docRouter = Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shema Todoapp",
      version: "1.0.0",
      description: "Shema Todoapp api Documentation",

      contact: {
        name: "Shema Christian",
        url: "https://shemachristian.netlify.app/ui/",
        email: "azertshema@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    produces: ["application/json"],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocument = swaggerJsDoc(options);

docRouter.use(
  "/",
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);

export default docRouter;
