import express from 'express';
import mongoose from 'mongoose';
import zod from 'zod';
import { Router } from 'express';
import { Recipe } from '../models/model.js'; // Use the Recipe model here

const router = Router();

// Get all recipes
router.get("/recipes", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new recipe
router.post("/recipe", async (req, res) => {
    // Define schema using Zod
    const recipeSchema = zod.object({
        title: zod.string().min(1, 'Title is required'),
        description: zod.string().min(1, 'Description is required'),
        image: zod.string().optional(),
        cookingTime: zod.string().min(1, 'Cooking time is required'),
        difficulty: zod.string().min(1, 'Difficulty is required'),
        servings: zod.string().min(1, 'Servings is required'),
        instructions: zod.array(zod.string()).optional(), // Change to an array of strings
        ingredients: zod.array(zod.string()).min(1, 'At least one ingredient is required'), // Already correct
        nutrition: zod.object({
            calories: zod.number(),
            protein: zod.string(),
            fat: zod.string(),
            carbohydrates: zod.string(),
            fiber: zod.string(),
            sodium: zod.string()
        }).optional(), // Add nutrition field validation if present
        tips: zod.array(zod.string()).optional(), // Optional tips array
        equipment: zod.array(zod.string()).optional() // Optional equipment array
    });

    // Use safeParse to validate the incoming request body
    const result = recipeSchema.safeParse(req.body);

    if (!result.success) {
        // If validation fails, return a 400 error with the validation messages
        return res.status(400).json({ errors: result.error.errors.map(e => e.message) });
    }

    // If validation passes, create a new recipe using the validated data
    const validatedRecipe = result.data;

    try {
        const newRecipe = new Recipe(validatedRecipe);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Get a recipe by ID
router.get("/recipe/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.json(recipe);
    } catch (err) {
        res.status(500).json({ error: "Invalid recipe ID or internal error" });
    }
});


export default router;
