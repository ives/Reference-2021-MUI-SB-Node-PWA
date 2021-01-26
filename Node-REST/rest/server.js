import express from 'express';
import cors from 'cors';
import routes from './routes';

export const Server = sessionCache =>
  new Promise(resolve => {
    const app = express();
    const port = process.env.REST_PORT || 8081;
    app.locals.sessionCache = sessionCache;

    app.use(cors());
    app.use(express.json( {limit: '50mb'}));
    app.use(express.urlencoded( {limit: '50mb', extended: true} ));

    Object.values(routes).map(route => app.use(route));

    app.listen(port, () => {
      console.info(`> Server port is ${port}`);
      resolve();
    })
    
  });
