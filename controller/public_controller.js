import User from "../model/user";
// import Info from "../model/getinfo";
import Login from "../model/log";
import BookNow from "../model/hello";
import Contact from "../model/contact";

exports.getIndexPage = (req, res)=> {
    res.render("index", {title: "NodeJS Project"});
}
exports.getAboutPage = (req, res)=> {
    res.render("about");
}
exports.getServicePage = (req, res)=> {
    res.render("services");
}
exports.getStorePage = (req, res)=> {
    res.render("store");
}
exports.getContactPage = (req, res)=> {
    res.render("contact", {title: "Contact"});
}
exports.postContact = (req, res)=> {
    const link = new Contact ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        message: req.body.message
    });
    link.save();
    res.redirect("/");
}
// exports.getContactPage = (req, res)=> {
//     res.render("contact", {title: "Contact"});
// }
// exports.postContact = (req, res)=> {
//     // console.log(req.body);
    
//     const form = new Info({
//         fullname: req.body.fullname,
//         email: req.body.email,
//         phone: req.body.phone,
//         address: req.body.address,
//         message: req.body.message
//     });

//     form.save();
//     res.redirect("/");
// }
exports.getLoginPage = (req, res) => {
    res.render("login", {title: "Login"});
}
exports.postLogin = (req, res)=> {
    // console.log(req.body);
    
    const log = new Login({
        email: req.body.email,
        password: req.body.pwd
    });

    log.save();
    res.redirect("/");
}
exports.getRegisterPage = (req, res)=> {
    res.render("Register");
}
exports.postRegister = (req, res)=> {
    // console.log(req.body);
    
    const user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.pwd
    });

    user.save();
    res.redirect("/login");
}
exports.getAppointment = (req, res)=> {
    res.render("Appointment");
}
exports.postAppointment = (req, res)=> {
    // console.log(req.body);
    
    const book = new BookNow({
        fullname: req.body.fullname,
        pet: req.body.pet,
        services: req.body.services,
        phonenumber: req.body.phonenumber,
        date: req.body.date,
        time: req.body.time,
    });
    book.save();
    res.redirect("/");
}


/**
 * term:
 * #1
 * to make public page:
 * we use template engine like: EJS
 * and response to render.
 * 
 * #2
 * if we are just creating an API
 * we use json on response directly without any template engine
 * 
 * API: Apllication Program Interface: xml, json
 * 
 * API type:
 * -public API
 * -private API
 * -enterprise API
 * 
 * API architecture:
 * -SOAP API (uses XML document)
 * -REST API (uses JSON document)
 * -RPC API (uses RPC-XML, RPC-JSON)
 * 
 * REST also known as RESTfull
 * 
 */