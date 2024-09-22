import * as Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const createAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.createAdmin({ ...req.body, password: hashedPassword });
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating Admin:', error);
        res.status(500).json({ error: 'Failed to create Admin' });
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.getAdminByEmail(email);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin.id, email: admin.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
        console.log("success", token)
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.getAllAdmins();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Admins' });
    }
};

export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.getAdminById(req.params.id);
        if (admin) {
            res.status(200).json(admin);
        } else {
            res.status(404).json({ error: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Admin' });
    }
};

export const updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.updateAdmin(req.params.id, req.body);
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Admin' });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        await Admin.deleteAdmin(req.params.id);
        res.status(200).json({ message: 'Admin deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Admin' });
    }
};


