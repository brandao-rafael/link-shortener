import express from 'express';
import shortenerRouter from './routes/shortener.routes';
import errorMiddleware from './middlewares/errorMiddleware';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://linkshortener.up.railway.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', shortenerRouter);

app.use(errorMiddleware);


export default app;
