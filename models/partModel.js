import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Define the part collection
const Part = collection(db, 'parts');

// Get all parts
export const getAllParts = async () => {
    const snapshot = await getDocs(Part);
    const Parts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return Parts;
};

// Create a new part
export const createPart = async (partData) => {
    const partRef = await addDoc(Part, partData);
    return { id: partRef.id };
};

// Get a part by ID
export const getPartById = async (id) => {
    const partDoc = await getDoc(doc(db, 'parts', id));
    if (partDoc.exists()) {
        return { id: partDoc.id, ...partDoc.data() };
    }
    return null;
};

// Update a part
export const updatePart = async (id, partData) => {
    await updateDoc(doc(db, 'parts', id), partData);
    return { id, ...partData };
};

// Delete a part
export const deletePart = async (id) => {
    await deleteDoc(doc(db, 'parts', id));
    return { message: 'Part deleted' };
};


