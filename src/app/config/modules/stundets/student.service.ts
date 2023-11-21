import Student from './student.model';
import { IStudent } from './stundent.interface';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);

  return result;
};

const getAllStudentFromDb = async () => {
  const result = await Student.find();

  return result;
};

// get single student
const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });

  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDb,
  getSingleStudent,
};
