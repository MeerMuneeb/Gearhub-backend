import * as Part from '../models/partModel.js'; 

export const getParts = async (req, res) => {
    try {
        const parts = await Part.getAllParts();
        res.status(200).json(parts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Parts' });
    }
};

export const createPart = async (req, res) => {
    try {
        console.log(req.body); // Log the incoming data
        delete req.body.id;
        const newPart = await Part.createPart(req.body);
        res.status(201).json(newPart);
    } catch (error) {
        console.error('Error creating Part:', error); // Log the error
        res.status(500).json({ error: 'Failed to create Part' });
    }
};

export const getPart = async (req, res) => {
    try {
        const part = await Part.getPartById(req.params.id);
        if (part) {
            res.status(200).json(part);
        } else {
            res.status(404).json({ error: 'Part not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Part' });
    }
};

export const updatePart = async (req, res) => {
    try {
        const updatedPart = await Part.updatePart(req.params.id, req.body);
        res.status(200).json(updatedPart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Part' });
    }
};

export const deletePart = async (req, res) => {
    try {
        await Part.deletePart(req.params.id);
        res.status(200).json({ message: 'Part deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Part' });
    }
};

