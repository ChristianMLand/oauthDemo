import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: { 
        type: String,
        required: [true, "Username is required"],
        minLength: [3, "Username must be at least 3 characters long"]
    },
    googleId: String,
    githubId: String
}, { timestamps: true });

const User = model("User", UserSchema); 
export default User;