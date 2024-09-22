import express from 'express';
import * as userController from '../controllers/userController.js'; // Include the .js extension

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;
