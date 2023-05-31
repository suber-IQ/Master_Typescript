import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import { connectDatabase } from './databaseSetup';
import { useExpressServer } from 'routing-controllers';
import UserController from './features/user/user.controller';

const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/mincrudts';
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // add mongodb database added
connectDatabase(DATABASE_URL)

useExpressServer(app, {
    controllers: [UserController],  // Add your controller
});

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
    
})
