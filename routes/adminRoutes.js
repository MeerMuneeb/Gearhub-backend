import express from 'express';
import * as adminController from '../controllers/adminController.js';
import verifyToken from '../middleware/authMiddleware.js';  

const router = express.Router();

router.get('/admins', verifyToken, adminController.getAdmins);
router.post('/admins', adminController.createAdmin);
router.get('/admins/:id', verifyToken, adminController.getAdmin); 
router.put('/admins/:id', verifyToken, adminController.updateAdmin); 
router.delete('/admins/:id', verifyToken, adminController.deleteAdmin); 

// Login
router.post('/login', adminController.loginAdmin);

export default router;
