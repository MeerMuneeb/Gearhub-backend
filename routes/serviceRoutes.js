import express from 'express';
import * as serviceController from '../controllers/serviceController.js'; // Include the .js extension

const router = express.Router();

router.get('/services', serviceController.getServices);
router.post('/services', serviceController.createService);
router.get('/services/:id', serviceController.getService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

export default router;


