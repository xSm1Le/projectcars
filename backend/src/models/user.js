import mongoose from 'mongoose';


// Define the user schema

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: false, default: 'false'},
});

const User = mongoose.model('User', userSchema);

export default User;
