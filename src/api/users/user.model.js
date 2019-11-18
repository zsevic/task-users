import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
    },
  },

  jobTitle: {
    type: String,
  },

  address: {
    type: String,
  },
});

export default mongoose.model('User', UserSchema);
