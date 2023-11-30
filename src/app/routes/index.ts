import express from 'express';
import { UserRoutes } from '../config/modules/users/users.router';
import { studentRoutes } from '../config/modules/stundets/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
