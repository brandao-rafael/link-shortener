import express from 'express';
import shortenerRouter from './routes/shortener.routes';
import errorMiddleware from './middlewares/errorMiddleware';
import cors from 'cors';

const app = express();

app.use(express.json());

const allowedOrigins = ['https://linkshortener.up.railway.app/'];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin!) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use('/', shortenerRouter);

app.use(errorMiddleware);


export default app;
