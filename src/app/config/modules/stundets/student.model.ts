import { Schema, model } from 'mongoose';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IStudentName,
} from './stundent.interface';

const studentNameSchema = new Schema<IStudentName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<IGuardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true },
  name: studentNameSchema,
  gender: ['female', 'male'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: ['A-', 'A', 'O+', 'O-', 'AB-', 'AB+', 'B+', 'B-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuarding: localGuardianSchema,
  isActive: ['active', 'inActive'],
  profileImage: {
    type: String,
  },
});

//create model
const Student = model<IStudent>('Student', studentSchema);

export default Student;
