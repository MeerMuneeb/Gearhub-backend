import * as Service from '../models/serviceModel.js'; 

export const getServices = async (req, res) => {
    try {
        const services = await Service.getAllServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Services' });
    }
};

export const createService = async (req, res) => {
    try {
        console.log(req.body); // Log the incoming data
        delete req.body.id;
        const newService = await Service.createService(req.body);
        res.status(201).json(newService);
    } catch (error) {
        console.error('Error creating Service:', error); // Log the error
        res.status(500).json({ error: 'Failed to create Service' });
    }
};

export const getService = async (req, res) => {
    try {
        const service = await Service.getServiceById(req.params.id);
        if (service) {
            res.status(200).json(service);
        } else {
            res.status(404).json({ error: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get Service' });
    }
};

export const updateService = async (req, res) => {
    try {
        const updatedService = await Service.updateService(req.params.id, req.body);
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Service' });
    }
};

export const deleteService = async (req, res) => {
    try {
        await Service.deleteService(req.params.id);
        res.status(200).json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Service' });
    }
};
