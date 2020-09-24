
const compare = require('../services/dateService');

function verifyRequestGetMyStats(req, res, next) {


    if (!req.headers['date1'] || !req.headers['date2'] || !req.headers['training']) {
        const err = new Error("Bad request!! Some data is missing!!");
        err.statusCode = 400;
        next(err);
    } else if (compare(new Date(req.headers['date1']), new Date(req.headers['date2'])) > 0) {
        const err = new Error("Bad request!! date1 > date2");
        err.statusCode = 400;
        next(err);
    }else {
        next();
    }
}

module.exports = verifyRequestGetMyStats;
