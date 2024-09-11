import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from 'mongoose';

// Get the directory path of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file in the config folder
const envPath = join(__dirname, '..', '.env');
dotenvConfig({ path: envPath });

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI;

// Create MongoDB connection
mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB', mongoURI))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Export the mongoose object to be used in other modules
export default mongoose;
