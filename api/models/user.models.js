import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
   password: {
    type: String,
    required: true
   }
},
{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema)
export default User;