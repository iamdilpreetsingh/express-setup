import { Server } from "http";

import express from "express";
import helmet from "helmet";

function main() {
  const application = express();
  application.use(helmet());
  application.use(express.urlencoded());
  application.use(express.json());

  application.get("/:name", (requset, response) => {
    response.status(200).json({ hello: requset.params.name });
  });

  const server = new Server({}, application);
  server.listen(8000, "127.0.0.1", () => {
    console.log(server.address());
  });
}

main();
