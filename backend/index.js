import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet'
import authRouth from './routes/index.js';
const app = express();

// Middleware
app.use(cors());                    // Enable CORS
app.use(json());                    // Parse JSON bodies
app.use(urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(helmet());

app.use('/auth', authRouth); // Use the auth routes

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port https://localhost:${PORT}`);
});