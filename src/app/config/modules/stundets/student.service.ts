import Student from './student.model';

const getAllStudentFromDb = async () => {
  const result = await Student.find();

  return result;
};

// get single student
const getSingleStudent = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

// delete student from db

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });

  return result;
};

export const studentServices = {
  getAllStudentFromDb,
  getSingleStudent,
  deleteStudentFromDB,
};
