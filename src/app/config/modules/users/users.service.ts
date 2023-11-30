import config from '../..';
import Student from '../stundets/student.model';
import { TStudent } from '../stundets/stundent.interface';
import { TUser } from './users.interface';

import { User } from './users.model';

const createStudentIntoDB = async (
  password: string,
  studentsData: TStudent,
) => {
  // create a new user object
  const userData: Partial<TUser> = {};

  // if password not given use default password
  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }

  // set user role
  userData.role = 'student';

  // set manually generated id
  userData.id = '20240100001';

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    studentsData.id = newUser.id; // embedding id
    studentsData.user = newUser._id; // reference _id

    // create new student
    const newStudent = await Student.create(studentsData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
