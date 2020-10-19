import dotenv from 'dotenv';
import Application from './Application/Application';

dotenv.config();

const app: Application = new Application();

app.start();