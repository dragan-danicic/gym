
function verifyRequestEvidentArriving(req, res, next) {

    if (!req.body.id) {
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    } else {
        next();
    }
}

module.exports = verifyRequestEvidentArriving;
