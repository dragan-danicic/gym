// Verify Token
function verifyRequsetChangePassword(req, res, next) {

    if (!req.body.p1 || !req.body.p2) {        
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    }else if(req.body.p1 !== req.body.p2) {
        const err = new Error("Passwords are different!!");
        next(err);
    }else {
        req.p1 = req.body.p1;
        next();
    }
}

module.exports = verifyRequsetChangePassword;
