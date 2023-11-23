import { HydratedDocument } from 'mongoose';
import { Model } from 'mongoose';

export type TGuardian = {
  fathersName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  mothersName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TStudentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TStudentName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A-' | 'A' | 'O+' | 'O-' | 'AB-' | 'AB+' | 'B+' | 'B-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuarding: TLocalGuardian;
  isActive: 'active' | 'inActive';
  profileImage?: string;
};

//* create a custom instance method

// export type StudentMethods = {
//   isStudentExist(id: string): Promise<TStudent>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;

//* for creating custom static method

// export interface StudentModel extends Model<TStudent> {
//   isStudentExist(id: string): Promise<TStudent>;
// }

//* for creating custom  both static and instance method

export type TStudentMethods = {
  isStudentExist(id: string): Promise<TStudent>;
};

export interface StudentModel
  extends Model<TStudent, Record<string, never>, TStudentMethods> {
  isStudentExist(
    id: string,
  ): Promise<HydratedDocument<TStudent, TStudentMethods>>;
}
