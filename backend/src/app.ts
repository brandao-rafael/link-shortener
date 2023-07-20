import express from 'express';

const app = express();

app.use(express.json());

app.use('/', (_req, res) => res.send('Choo choo'));

export default app;
