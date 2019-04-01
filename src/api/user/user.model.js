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
  async list ({ limit, skip, sortData, searchData }) {
    let query = [
      {
        $project: {
          _id: 0,
          name: 1,
          email: 1,
          address: 1,
          jobTitle: 1
        }
      },
      {
        $match: {
          $or: [
            {
              name: { $regex: searchData, $options: 'i' }
            },
            {
              email: { $regex: searchData, $options: 'i' }
            }
          ]
        }
      },
      {
        $sort: sortData
      },
      { $limit: +limit },
      { $skip: +skip }
    ]

    return this.aggregate(query)
  }
}

export default mongoose.model('User', UserSchema)
