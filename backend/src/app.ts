import express from 'express';
import shortenerRouter from './routes/shortener.routes';

const app = express();

app.use(express.json());

app.use('/shorten', shortenerRouter);

app.use('/', (_req, res) => res.send('Choo choo'));


export default app;
