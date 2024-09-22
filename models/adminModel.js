import db from '../config/firebaseConfig.js'; // Make sure to include the .js extension
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

// Define the admin collection
const Admin = collection(db, 'admins');

// Get all admins
export const getAllAdmins = async () => {
    const snapshot = await getDocs(Admin);
    const Admins = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return Admins;
};

// Create a new admin
export const createAdmin = async (adminData) => {
    const adminRef = await addDoc(Admin, adminData);
    return { id: adminRef.id };
};

// Get a admin by ID
export const getAdminById = async (id) => {
    const adminDoc = await getDoc(doc(db, 'admins', id));
    if (adminDoc.exists()) {
        return { id: adminDoc.id, ...adminDoc.data() };
    }
    return null;
};

// Update a admin
export const updateAdmin = async (id, adminData) => {
    await updateDoc(doc(db, 'admins', id), adminData);
    return { id, ...adminData };
};

// Delete a admin
export const deleteAdmin = async (id) => {
    await deleteDoc(doc(db, 'admins', id));
    return { message: 'Admin deleted' };
};

export const getAdminByEmail = async (email) => {
    const q = query(Admin, where('email', '==', email));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
        return null;
    }
    
    const adminDoc = snapshot.docs[0];
    return { id: adminDoc.id, ...adminDoc.data() };
};

