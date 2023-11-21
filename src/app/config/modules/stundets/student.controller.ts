import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    const result = await studentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'User create successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDb();

    res.status(200).json({
      success: true,
      message: 'Get all students',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

//get single student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await studentServices.getSingleStudent(studentId);

    res.status(200).json({
      success: true,
      message: 'Get Single student',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
