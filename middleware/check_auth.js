exports.checkAuth = (req, res,next) => {
    const user= 0;

    if(user){
        next();
    }else {
        res.json("Oops! you're not authorized");
    }
}