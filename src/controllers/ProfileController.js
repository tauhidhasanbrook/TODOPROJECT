const ProfileModel = require('../models/ProfileModel')
const jwt = require('jsonwebtoken');

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
                let Payload = {
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: data[0],
                }
                let token = jwt.sign(Payload, "Tauhid3965#")

                res.status(200).json({ status: "OK", token: token, data: data })
            } else {
                res.status(401).json({ status: "401 Unauthorized", data: "Unauthorized" });
            }
        }
    })



}