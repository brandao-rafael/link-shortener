import express from 'express';
import shortenerRouter from './routes/shortener.routes';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/', shortenerRouter);

app.use(errorMiddleware);


export default app;
