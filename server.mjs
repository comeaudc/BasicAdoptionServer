// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import mammalRoutes from './routes/mammalRoutes.mjs';
import Mammal from './models/mammalSchema.mjs';
import allAnimals from './utilities/data.mjs';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
connectDB();

// Routes
app.use('/api/mammals', mammalRoutes);

// seed route
app.get('/seed', async (req, res) => {
  // await Mammal.deleteMany({}); //Delete all data

  await Mammal.create(allAnimals); //reseed all data

  res.send('seeded data');
});

// ErrMiddleware
app.use((err, _req, res, next) => {
  res.status(500).json({ msg: err.message });
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
