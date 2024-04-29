import express from 'express'
import Connection from './DataBase/Db.js';
import DefaultData from './Default.js';
import dotenv from 'dotenv';
import Router from './Routes/Route.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

dotenv.config();
//ith back end and frondend cinnect cheyyan an cors upayokikkunnath.
app.use(cors());
// it json formlek mattan an ingane koduthath..
app.use(bodyParser.json({extended: true}));

// ith enthinan enn vechal url space vannal ditect cheyyanam athinan
app.use(bodyParser.urlencoded({extended: true}));
// ivdennan router start cheyyunnath.
app.use('/',Router);

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


//db user and password connect cheythu
Connection(username,password);


app.listen(PORT, ()=> console.log(`Server is running on the port ${PORT}`));
DefaultData();
