import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Define the User collection
const User = collection(db, 'users');

// Get all users
export const getAllUsers = async () => {
    const snapshot = await getDocs(User);
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return users;
};

// Create a new user
export const createUser = async (userData) => {
    const userRef = await addDoc(User, userData);
    return { id: userRef.id };
};

// Get a user by ID
export const getUserById = async (id) => {
    const userDoc = await getDoc(doc(db, 'users', id));
    if (userDoc.exists()) {
        return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
};

// Update a user
export const updateUser = async (id, userData) => {
    await updateDoc(doc(db, 'users', id), userData);
    return { id, ...userData };
};

// Delete a user
export const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    return { message: 'User deleted' };
};
