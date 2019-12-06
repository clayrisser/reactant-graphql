import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createContext } from './context';
import { createSchema } from './schema';

export const config = {
  debug: true,
  port: 4000
};

export const app = express();

export let server: ApolloServer;

app.get('/', (_req: Request, res: Response) => res.redirect('/graphql'));

(async () => {
  server = new ApolloServer({
    schema: await createSchema(),
    playground: config.debug,
    context: createContext
  });
  server.applyMiddleware({ app });
  await new Promise((resolve, reject) => {
    app.listen({ port: config.port }, (err?: Error) => {
      if (err) return reject(err);
      return resolve();
    });
  });
  console.log(`listening on port ${config.port}`);
})().catch(console.error);
