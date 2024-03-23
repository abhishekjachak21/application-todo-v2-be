// models/task.model.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  writeTask: {
    type: String,
    required: [true, "Task is required"]
  },
  targetTime: {
    type: Number,
    required:  [true, "Target time is required"]
  },
  actualTime: {
    type: Number,
    default: undefined,
  },
  completed: {
    type: Boolean,
    default: false
  }
  
}, 
{ timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;







// userSchema.pre("save", async function (next) {
//   if(!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 10)
//   next()
// })

// userSchema.methods.isPasswordCorrect = async function(password){
//   return await bcrypt.compare(password, this.password)
// }

// userSchema.methods.generateAccessToken = function(){
//   return jwt.sign(
//       {
//           _id: this._id,
//           email: this.email,
//           username: this.username,
//           fullName: this.fullName
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//           expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//       }
//   )
// }
// userSchema.methods.generateRefreshToken = function(){
//   return jwt.sign(
//       {
//           _id: this._id,
          
//       },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//           expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//       }
//   )
// }


// export const User = mongoose.model("User", userSchema);
