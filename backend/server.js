import express from 'express';
import cors from 'cors';
import joyasRoutes from './routes/joyasRoutes.js';
import { logger } from 'logger-express';
import dotenv from "dotenv";
dotenv.config(); 

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());
app.use(cors());
app.use(logger());
app.use('/api/v1', joyasRoutes )

app.listen(`${PORT}`, console.log(`Server on http://localhost:${PORT}`));