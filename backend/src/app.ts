import express from 'express';
import shortenerRouter from './routes/shortener.routes';
import errorMiddleware from './middlewares/errorMiddleware';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.use('/', shortenerRouter);

app.use(errorMiddleware);


export default app;
