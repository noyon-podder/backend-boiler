export type IGuardian = {
  fathersName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  mothersName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type IStudentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type ILocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: IStudentName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A-' | 'A' | 'O+' | 'O-' | 'AB-' | 'AB+' | 'B+' | 'B-';
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuarding: ILocalGuardian;
  isActive: 'active' | 'inActive';
  profileImage?: string;
};
