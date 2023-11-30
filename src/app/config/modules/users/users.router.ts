import express from 'express';
import { UserControllers } from './users.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createStudentIntoDB);

export const UserRoutes = router;
