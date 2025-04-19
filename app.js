import 'dotenv/config';
import 'module-alias/register.js';
import { Server } from './src/server/server.js';


const server = new Server();

server.listen();
