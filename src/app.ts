import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/config/modules/stundets/student.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application route

app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
