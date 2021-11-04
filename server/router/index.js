const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/user-controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;