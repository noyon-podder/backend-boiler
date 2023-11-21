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
    res.send(500).json({
      success: false,
      message: error,
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
  } catch (err) {
    console.log(err);
  }
};

//get single student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    console.log('single id', studentId);
    const result = await studentServices.getSingleStudent(studentId);

    res.status(200).json({
      success: true,
      message: 'Get Single student',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
