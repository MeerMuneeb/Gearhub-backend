import express from 'express';
import * as mechanicController from '../controllers/mechanicController.js'; // Include the .js extension

const router = express.Router();

router.get('/mechanics', mechanicController.getMechanics);
router.post('/mechanics', mechanicController.createMechanic);
router.get('/mechanics/:id', mechanicController.getMechanic);
router.put('/mechanics/:id', mechanicController.updateMechanic);
router.delete('/mechanics/:id', mechanicController.deleteMechanic);

export default router;


