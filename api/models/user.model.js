import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //so that no user can be added to db without username
        unique: true,
    },
    email: {
        type: String,
        required: true, //so that no user can be added to db without username
        unique: true,
    },
    password: {
        type: String,
        required: true, //so that no user can be added to db without username
    }
},{timestamps: true });

const User = mongoose.model('User', userSchema);

export default User; //to use this model anywhere else in our application
