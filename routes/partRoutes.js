import express from 'express';
import * as partController from '../controllers/partController.js'; // Include the .js extension

const router = express.Router();

router.get('/parts', partController.getParts);
router.post('/parts', partController.createPart);
router.get('/parts/:id', partController.getPart);
router.put('/parts/:id', partController.updatePart);
router.delete('/parts/:id', partController.deletePart);

export default router;
