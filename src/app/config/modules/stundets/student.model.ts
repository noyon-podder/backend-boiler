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
    // trim remove unnesecery space
    trim: true,
    required: [true, 'First name is required'],
    //custom error validator
    validate: {
      validator: function (value: string) {
        const firstNameString = value.charAt(0).toUpperCase() + value.slice(1);

        return firstNameString === value;
      },
      message: '{VALUE} is not capitalize',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

const guardianSchema = new Schema<IGuardian>({
  fathersName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  mothersName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: studentNameSchema,
    required: [true, 'Student name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['female', 'male'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A-', 'A+', 'O+', 'O-', 'AB-', 'AB+', 'B+', 'B-'],
    required: [true, 'Blood group is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuarding: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    default: 'active',
  },
  profileImage: {
    type: String,
  },
});

// create model
const Student = model<IStudent>('Student', studentSchema);

export default Student;
