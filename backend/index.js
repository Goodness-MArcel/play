import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet'
// import routes from './routes/index.js';
import router from './routes/index.js';
router
const app = express();

// Middleware
app.use(cors());                  
app.use(json());                   
app.use(urlencoded({ extended: true })); 
app.use(helmet());
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.use('/api', router); // Use the routes


app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port https://localhost:${PORT}`);
});