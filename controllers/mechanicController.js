import * as Mechanic from '../models/mechanicModel.js'; 

export const getMechanics = async (req, res) => {
    try {
        const mechanics = await Mechanic.getAllMechanics();
        res.status(200).json(mechanics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Mechanics' });
    }
};

export const createMechanic = async (req, res) => {
    try {
        console.log(req.body); // Log the incoming data
        delete req.body.id;
        const newMechanic = await Mechanic.createMechanic(req.body);
        res.status(201).json(newMechanic);
    } catch (error) {
        console.error('Error creating Mechanic:', error); // Log the error
        res.status(500).json({ error: 'Failed to create Mechanic' });
    }
};

export const getMechanic = async (req, res) => {
    try {
        const mechanic = await Mechanic.getMechanicById(req.params.id);
        if (mechanic) {
            res.status(200).json(mechanic);
        } else {
            res.status(404).json({ error: 'Mechanic not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Mechanic' });
    }
};

export const updateMechanic = async (req, res) => {
    try {
        const updatedMechanic = await Mechanic.updateMechanic(req.params.id, req.body);
        res.status(200).json(updatedMechanic);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Mechanic' });
    }
};

export const deleteMechanic = async (req, res) => {
    try {
        await Mechanic.deleteMechanic(req.params.id);
        res.status(200).json({ message: 'Mechanic deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Mechanic' });
    }
};



