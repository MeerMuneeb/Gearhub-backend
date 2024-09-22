import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Define the ticket collection
const Ticket = collection(db, 'tickets');

// Get all tickets
export const getAllTickets = async () => {
    const snapshot = await getDocs(Ticket);
    const Tickets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return Tickets;
};

// Create a new ticket
export const createTicket = async (ticketData) => {
    const ticketRef = await addDoc(Ticket, ticketData);
    return { id: ticketRef.id };
};

// Get a ticket by ID
export const getTicketById = async (id) => {
    const ticketDoc = await getDoc(doc(db, 'tickets', id));
    if (ticketDoc.exists()) {
        return { id: ticketDoc.id, ...ticketDoc.data() };
    }
    return null;
};

// Update a ticket
export const updateTicket = async (id, ticketData) => {
    await updateDoc(doc(db, 'tickets', id), ticketData);
    return { id, ...ticketData };
};

// Delete a ticket
export const deleteTicket = async (id) => {
    await deleteDoc(doc(db, 'tickets', id));
    return { message: 'Ticket deleted' };
};
