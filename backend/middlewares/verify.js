const jwt = require('jsonwebtoken');

async function verify(req) {
    
    try {
        const obj = await jwt.verify(req.token, 'secretkey');
        return {status:true,data:obj};
    } catch (error) {
        return {status:false,data:error}    
    }
}

module.exports = verify;
