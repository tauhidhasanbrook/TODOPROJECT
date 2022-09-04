const mongoose = require('mongoose');

let DataSchema = mongoose.Schema({
    FirstName: { type: String, require: true },
    LastName: { type: String, require: true },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    PhoneNumber: { type: Number, require: true, required: 'Phone Number is required', match: [/^(?:\+88|88)?(01[3-9]\d{8})$/, 'Please fill a valid phone  Number'] },
    UserName: { type: String, require: true, unique: true, index: true },
    Password: { type: String, required: 'Password is required', match: [/^[a-zA-Z0-9-_.]+$/, 'Please fill a valid user name'] }

}, { versionKey: false })

let ProfileModel = mongoose.model('profiles', DataSchema)


module.exports = ProfileModel;