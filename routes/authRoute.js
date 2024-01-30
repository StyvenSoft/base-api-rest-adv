const express = require('express');
const { createUser, loginUserController } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserController);
module.exports = router;