
import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Define the service collection
const Service = collection(db, 'services');

// Get all services
export const getAllServices = async () => {
    const snapshot = await getDocs(Service);
    const Services = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return Services;
};

// Create a new service
export const createService = async (serviceData) => {
    const serviceRef = await addDoc(Service, serviceData);
    return { id: serviceRef.id };
};

// Get a service by ID
export const getServiceById = async (id) => {
    const serviceDoc = await getDoc(doc(db, 'services', id));
    if (serviceDoc.exists()) {
        return { id: serviceDoc.id, ...serviceDoc.data() };
    }
    return null;
};

// Update a service
export const updateService = async (id, serviceData) => {
    await updateDoc(doc(db, 'services', id), serviceData);
    return { id, ...serviceData };
};

// Delete a service
export const deleteService = async (id) => {
    await deleteDoc(doc(db, 'services', id));
    return { message: 'Service deleted' };
};


