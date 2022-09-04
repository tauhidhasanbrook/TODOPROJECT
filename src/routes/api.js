const express = require('express');
const ProfileController = require('../controllers/ProfileController')


const router = express.Router();

router.post('/UserRegistration', ProfileController.UserRegistration)



module.exports = router;