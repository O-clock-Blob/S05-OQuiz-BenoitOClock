const userMiddleware = (req, res, next) => {
    if(req.session.user){
        // je rends mon objet user accessible ds mes templates ejs
        res.locals.user = req.session.user;
    } else {
        res.locals.user = false;
    }
    next();
}

module.exports  = userMiddleware;

