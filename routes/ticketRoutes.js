import express from 'express';
import * as ticketController from '../controllers/ticketController.js'; // Include the .js extension

const router = express.Router();

router.get('/tickets', ticketController.getTickets);
router.post('/tickets', ticketController.createTicket);
router.get('/tickets/:id', ticketController.getTicket);
router.put('/tickets/:id', ticketController.updateTicket);
router.delete('/tickets/:id', ticketController.deleteTicket);

export default router;
