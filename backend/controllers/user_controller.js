const BaseController = require("./base_controller");
const userRepo = require('../repositories/user_repository');
const userService = require('../services/user_service');

class UserController extends BaseController {


    async login(username, password) {
        try {
            const res = await userRepo.getUser(username);
            
            if (res) {
                const ok = await userService.checkHashedPassword(password,res.password);
                if(ok){
                    const responseService = await userService.makeJwtToken(res.id, res.firstName, res.lastName, res.role);
                    return this.ok(responseService);
                }else{
                    return this.notFound("WRONG USERNAME AND PASSWORD");
                }
            }
            else {
                return this.notFound("WRONG USERNAME AND PASSWORD");
            }
        } catch (err) {
            return this.error(err);
        }
    }

    async change(id, p1) {
        try {
            const h = await userService.hashPassword(p1);
            await userRepo.change(id, h);

            return this.ok("Succ changed");

        } catch (err) {
            return this.error(err);
        }
    }



}

module.exports = new UserController();