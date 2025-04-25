import express from 'express';
import Mammal from '../models/mammalSchema.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  // Specify Action
  const newMammal = await Mammal.create(req.body);

  // Return Result
  res.json(newMammal);
});

// Read
router.get('/', async (req, res) => {
  // Specify Action
  const allMammals = await Mammal.find({});

  // Return Result
  res.json(allMammals);
});

// Update
router.put('/:id', async (req, res) => {
  // Specify Action
  const editMammal = await Mammal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!editMammal) res.status(400).json({ msg: 'Mammal not found' });

  // Return Result
  res.json(editMammal);
});

// Delete
router.delete('/:id', async (req, res) => {
  // Specify Action
  const deleteMammal = await Mammal.findByIdAndDelete(req.params.id);

  if (!deleteMammal) res.status(400).json({ msg: 'Mammal not found' });

  // Return Result
  res.json(deleteMammal);
});
export default router;
