// Verify Token
function verifyRequestChargeAMemberCard(req, res, next) {

    if (!req.body.id || !req.body.duration) {
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    } else if(req.body.duration != 1 && req.body.duration != 2 && req.body.duration != 3 && req.body.duration != 6 && req.body.duration != 12) {        
        const err = new Error("Bad request!! Duration must be {1,2,3,6,12}!");
        err.statusCode = 400;
        next(err);
    } else {
        next();
    }
}

module.exports = verifyRequestChargeAMemberCard;
