const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {


    async makeJwtToken(id, firstName, lastName, role) {

        const user = { id, firstName, lastName, role };
        let token = await jwt.sign({ user }, 'secretkey', { expiresIn: "10h" });
        user.token = token;
        return user;
    }

    async hashPassword(password) {

        const saltRounds = 10;

        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        });

        return hashedPassword;
    }

    async checkHashedPassword(password, hashed) {
        const ret = await bcrypt.compare(password, hashed);
        return ret;
    }



}

async function m() {
    const c = await new UserService().hashPassword("filip")
    console.log(c);
}
m();


module.exports = new UserService();
