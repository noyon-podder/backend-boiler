import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundErrorHandler from './app/middleware/notFoundErrorHandler';
import router from './app/routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application route

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// default global error handler from  express
app.use(globalErrorHandler);

// not found error handler
app.use(notFoundErrorHandler);

export default app;
