import "reflect-metadata";
import express from 'express';


import "./database";

const app = express()
 
app.listen(3030, ()=> console.log('Server is running'));