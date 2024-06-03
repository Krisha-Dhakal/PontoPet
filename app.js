/**
 * Working with NodeJS framework
 */
//ES5 method requiring files
//const express = require("express");

//ES6 method requiring files
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';

//preparing methods of express framework to use
const app= express();
//this is major handler of the framework for project
require("dotenv").config();

const PORT = process.env.PORT || 4000;
//app.get('path', function());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//using Template engine for HTML document
app.set("view engine", "ejs");
app.use(express.static("public"));

const indexPage = require("./routes/public_routes");
app.use("/", indexPage);

//Using middleware on dashboard all/root
//we use from validation also as middleware later.
import{checkAuth } from './middleware/check_auth';

const adminPage = require("./routes/admin_routes");
app.use("/dashboard", checkAuth, adminPage);

//API routing
const apiRouter = require('./routes/api_routes');
app.use("/api/v1",apiRouter);

app.listen(PORT, ()=>
{
    console.log(`Server is running at http://localhost:${PORT}`);
});

//database connection
mongoose.connect(process.env.DB_URI,{connectTimeoutMS: 1000}); 
const db = mongoose.connection;
db.on('error', err => {console.log(err);});
db.once("open",() => console.log("Connected to the database!"));

/***
 * Express JS: Framework of NodeJS
 * EJS: TEmplate Engine for NodeJS (Embeded JavaScript)
 * ReactJS: Front-end JAvascript framework
 * MongoDB:Database (NRDBMS) (It is document model database)
 * NodeJS: Back-end programming library/packages of JAvascript
 * 
 * MERN-stack (Full-stack)
 * -Front-end
 *      JS frameworks: Rreact, Angular, Vue, + NextJS
 *      CSS frameworks: bootstrap, foundation, material UI
 * -BAck-end
 *       JS library: NodeJS
 *       Other: PHP, Java, Python, ASP.NET etc...
 * -Database
 *      Document model: MoongoDB ...
 *      Relational model: MySQL ...
 */