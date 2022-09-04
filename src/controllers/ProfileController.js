const ProfileModel = require('../models/ProfileModel')


// User Registration
exports.UserRegistration = (req, res) => {
    let reqBody = req.body;

    ProfileModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(401).json({ status: "401 Unauthorized", data: err });
        } else {
            res.status(200).json({ status: "OK!", data: data });
        }
    })
}

// User LoginController

exports.UserLogin = (req, res) => {
    let Username = req.body.UserName;
    let Password = req.body.Password;

    ProfileModel.find({ Username: Username, Password: Password }, (err, data) => {

        if (err) {
            res.status(401).json({ status: "401 Unauthorized", data: err });
        } else {
            if (data.length > 0) {
                res.status(200).json({ status: "OK", data: data })
            } else {
                res.status(401).json({ status: "401 Unauthorized", data: "Unauthorized" });
            }
        }
    })



}