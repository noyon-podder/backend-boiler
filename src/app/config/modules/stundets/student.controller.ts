/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { studentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../../utils/sendResponse';
import catchAsync from '../../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentFromDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Students get successfully',
    data: result,
  });
});

//get single student
const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await studentServices.getSingleStudent(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get a single student',
    data: result,
  });
});

// deleted student from db

const deletedStudentFromDB = catchAsync(async (req, res, next) => {
  const { deletedId } = req.params;

  const result = await studentServices.deleteStudentFromDB(deletedId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const studentControllers = {
  getAllStudent,
  getSingleStudent,
  deletedStudentFromDB,
};
