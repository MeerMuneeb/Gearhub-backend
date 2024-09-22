import * as Ticket from '../models/ticketModel.js'; 

export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Tickets' });
    }
};

export const createTicket = async (req, res) => {
    try {
        console.log(req.body); // Log the incoming data
        delete req.body.id;
        const newTicket = await Ticket.createTicket(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        console.error('Error creating Ticket:', error); // Log the error
        res.status(500).json({ error: 'Failed to create Ticket' });
    }
};

export const getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.getTicketById(req.params.id);
        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(404).json({ error: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Ticket' });
    }
};

export const updateTicket = async (req, res) => {
    try {
        const updatedTicket = await Ticket.updateTicket(req.params.id, req.body);
        res.status(200).json(updatedTicket);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Ticket' });
    }
};

export const deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteTicket(req.params.id);
        res.status(200).json({ message: 'Ticket deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Ticket' });
    }
};
