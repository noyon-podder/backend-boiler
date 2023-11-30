import { HydratedDocument, Types } from 'mongoose';
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
  user: Types.ObjectId;
  name: TStudentName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  password: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A-' | 'A' | 'O+' | 'O-' | 'AB-' | 'AB+' | 'B+' | 'B-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuarding: TLocalGuardian;
  profileImage?: string;
  isDeleted: boolean;
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
  isStudentExist(id: string): Promise<TStudent | null>;
};

export interface StudentModel
  extends Model<TStudent, Record<string, never>, TStudentMethods> {
  isStudentExist(
    id: string,
  ): Promise<HydratedDocument<TStudent, TStudentMethods>>;
}
