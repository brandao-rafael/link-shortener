import 'dotenv/config';
import app from './app';
import connectToDatabase from './models/connection';

const port = process.env.PORT || 3005;

connectToDatabase().then(() => {
  app.listen(port, () => `Server running in port ${port}`);
})
.catch((error: Error) => { 
  throw Error(error.message);
});