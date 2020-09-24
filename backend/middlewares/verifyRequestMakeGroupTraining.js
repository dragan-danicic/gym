// Verify Token
function verifyRequestMakeGroupTraining(req, res, next) {

    if (!req.body.name || !req.body.date || !req.body.time) {
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    } else {
        next();
    }
}

module.exports = verifyRequestMakeGroupTraining;
