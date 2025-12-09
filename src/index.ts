import { z } from "zod";
import { FastMCP } from "fastmcp";
import { add } from "./add";

export const main = (port: number) => {
  const server = new FastMCP({
    name: "NPX MCP TEMPLATE",
    version: "1.0.0",
  });

  server.addTool({
    name: "Add Tool",
    description: "Add two numbers",
    parameters: z.object({
      a: z.number(),
      b: z.number(),
    }),
    execute: async (args) => {
      return add(args);
    },
  });

  server.start({
    transportType: "httpStream",
    httpStream: {
      host: "0.0.0.0",
      port: port,
    },
  });
};

main(3000)
