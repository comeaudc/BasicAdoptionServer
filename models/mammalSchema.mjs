import mongoose from 'mongoose';

const mammalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  numOfToeBeans: {
    type: Number,
    required: true,
    min: 15
  }, 
});

export default mongoose.model('Mammal', mammalSchema);
