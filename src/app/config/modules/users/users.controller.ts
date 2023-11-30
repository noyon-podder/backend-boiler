/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './users.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';

const createStudentIntoDB = catchAsync(async (req, res, next) => {
  const { student, password } = req.body;

  const result = await UserServices.createStudentIntoDB(password, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created Successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudentIntoDB,
};
