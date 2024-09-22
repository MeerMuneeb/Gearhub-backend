import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; 
import adminRoutes from './routes/adminRoutes.js'; 
import mechanicRoutes from './routes/mechanicRoutes.js'; 
import serviceRoutes from './routes/serviceRoutes.js'; 
import partRoutes from './routes/partRoutes.js'; 
import ticketRoutes from './routes/ticketRoutes.js'; 

const app = express();

// Configure CORS to allow requests from the frontend
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow cookies and authentication headers
}));

app.use(express.json());
app.use('/api', userRoutes); 
app.use('/api', adminRoutes);
app.use('/api', mechanicRoutes);
app.use('/api', serviceRoutes);
app.use('/api', partRoutes);
app.use('/api', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
