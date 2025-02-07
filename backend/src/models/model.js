import mongoose from 'mongoose';

// Recipe Schema
export const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },  // Make image optional
    cookingTime: { type: String, required: true },
    difficulty: { type: String, required: true },
    servings: { type: String, required: true },
    instructions: { type: [String], required: false }, // Update to array of strings
    ingredients: { type: [String], required: true },  // Ingredients are required as array of strings
    nutrition: {
      calories: { type: Number, required: false },
      protein: { type: String, required: false },
      fat: { type: String, required: false },
      carbohydrates: { type: String, required: false },
      fiber: { type: String, required: false },
      sodium: { type: String, required: false }
    },
    tips: { type: [String], required: false }, // Optional tips as array of strings
    equipment: { type: [String], required: false } // Optional equipment as array of strings
  });

// User Schema
export const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
    minlength: 6, 
  },
});

// Create Models
export const Recipe = mongoose.model('Recipe', recipeSchema);
export const User = mongoose.model('User', userSchema);
