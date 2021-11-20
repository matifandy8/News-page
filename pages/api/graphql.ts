import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs,
});

const startServer = server.start();

export default cors(async (req:any, res:any) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
