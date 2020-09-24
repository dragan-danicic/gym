// Verify Token
function verifyRequestTrialTraining(req, res, next) {

    if (!req.body.username || !req.body.password) {
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    } else {
        next();
    }
}

module.exports = verifyRequestTrialTraining;
