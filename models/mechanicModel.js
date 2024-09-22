import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Define the mechanic collection
const Mechanic = collection(db, 'mechanics');

// Get all mechanics
export const getAllMechanics = async () => {
    const snapshot = await getDocs(Mechanic);
    const Mechanics = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return Mechanics;
};

// Create a new mechanic
export const createMechanic = async (mechanicData) => {
    const mechanicRef = await addDoc(Mechanic, mechanicData);
    return { id: mechanicRef.id };
};

// Get a mechanic by ID
export const getMechanicById = async (id) => {
    const mechanicDoc = await getDoc(doc(db, 'mechanics', id));
    if (mechanicDoc.exists()) {
        return { id: mechanicDoc.id, ...mechanicDoc.data() };
    }
    return null;
};

// Update a mechanic
export const updateMechanic = async (id, mechanicData) => {
    await updateDoc(doc(db, 'mechanics', id), mechanicData);
    return { id, ...mechanicData };
};

// Delete a mechanic
export const deleteMechanic = async (id) => {
    await deleteDoc(doc(db, 'mechanics', id));
    return { message: 'Mechanic deleted' };
};


