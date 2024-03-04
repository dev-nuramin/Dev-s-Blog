import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        unique: true,
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

export default  mongoose.model('User', userSchema)