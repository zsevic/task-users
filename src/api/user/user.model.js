import mongoose, { Schema } from 'mongoose'
import validator from 'validator'

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required!'],
    trim: true
  },

  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    validate: {
      validator (email) {
        return validator.isEmail(email)
      }
    }
  },

  jobTitle: {
    type: String
  },

  address: {
    type: String
  }
})

UserSchema.statics = {
  list ({ limit, skip, sortData, filterData }) {
    return this.find(filterData, {
      _id: 0,
      __v: 0
    })
      .sort(sortData)
      .skip(skip)
      .limit(limit)
  }
}

export default mongoose.model('User', UserSchema)
