import express from 'express';
const publicRouter =  express.Router();

import{
    getIndexPage,
    getAboutPage,
    getContactPage,
    postContact,
    getLoginPage, 
    postLogin,
    getRegisterPage,
    postRegister, 
    getServicePage, 
    getStorePage,
    getAppointment, 
    postAppointment
}from '../controller/public_controller';

publicRouter.get("/",getIndexPage);

publicRouter.get("/about", getAboutPage);

publicRouter.get("/services", getServicePage);

publicRouter.get("/store", getStorePage);

publicRouter.get("/contact", getContactPage);

publicRouter.post("/addcontact", postContact);

publicRouter.get("/login", getLoginPage);

publicRouter.post("/addlogin", postLogin);

publicRouter.get("/register", getRegisterPage);

publicRouter.post("/adduser", postRegister);

publicRouter.get('/appointment',getAppointment);

publicRouter.post('/appoint',postAppointment);
module.exports = publicRouter;   