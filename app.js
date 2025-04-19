//import 'dotenv/config';
import 'module-alias/register.js';
import { Server } from './src/server/server.js';
import dotenv from 'dotenv';


dotenv.config();

const server = new Server();

server.listen();
