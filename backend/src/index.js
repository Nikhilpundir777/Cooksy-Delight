import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import recipeRoutes from './routes/recipe.route.js';
import userRoutes from './routes/user.route.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors()); 

// Database connection function
const connectDb = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);  // Exit the process if database connection fails
    }
};


connectDb();

// API routes
app.use('/api', recipeRoutes);  // Routes for recipes
app.use('/api', userRoutes);    // Routes for user authentication

app.get('/',(req,res)=>{
    res.send('hi')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
