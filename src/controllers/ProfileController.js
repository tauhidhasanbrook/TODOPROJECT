const ProfileModel = require('../models/ProfileModel')



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