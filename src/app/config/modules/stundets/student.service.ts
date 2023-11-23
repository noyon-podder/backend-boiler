import Student from './student.model';
import { TStudent } from './stundent.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  //* create custom  static method

  // if (await Student.isStudentExist(studentData.id)) {
  //   throw new Error('User already exist and done with both method!');
  // }

  // const result = await Student.create(studentData);

  //* now create custom instance method
  const studentInstance = new Student(studentData); // create instance

  if (await studentInstance.isStudentExist(studentData.id)) {
    throw new Error('Usr already exist!');
  }
  const result = studentInstance.save(); //built in instance method

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
