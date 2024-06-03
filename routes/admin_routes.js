import express from 'express';
const adminRouter= express.Router();

 import{
    getDashboard
 }from '../controller/admin_controller';
//Let's use  MIDDLEWARE , to 

adminRouter.get("/",getDashboard);

module.exports =adminRouter;