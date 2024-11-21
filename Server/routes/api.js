const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const clientController = require('../controllers/clientController');
const userController = require('../controllers/userController');



// Login API
router.post('/login', loginController.login);
// client API's
router.post('/addclient',clientController.addclient);
router.get('/clientlist',clientController.clientlist);
router.patch('/updateclient/:clientId',clientController.updateClient);
// user API's
router.get('/userlist',userController.userlist);
router.post('/adduser',userController.adduser);
router.patch('/updateuser/:userId',userController.updateUser);
module.exports = router;



























