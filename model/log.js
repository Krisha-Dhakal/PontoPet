// model/log.js
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const Login = mongoose.model('Login', logSchema);

export default Login;
