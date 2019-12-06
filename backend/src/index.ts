import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createContext } from './context';
import { createSchema } from './schema';

const app = express();

export const config = {
  port: 4000
};

app.get('/', (_req: Request, res: Response) => {
  return res.redirect('/graphql');
});

(async () => {
  const server = new ApolloServer({
    schema: await createSchema(),
    playground: true,
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
