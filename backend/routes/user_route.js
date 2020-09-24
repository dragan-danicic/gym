const express = require("express")
const userController = require("../controllers/user_controller");
const unpack = require("../middlewares/unpack");
const verify = require("../middlewares/verify");
const router = new express.Router();
const verifyRequsetLogin = require("../middlewares/verifyRequsetLogin");
const verifyRequsetChangePassword = require("../middlewares/verifyRequsetChangePassword");

router.post('/login', [verifyRequsetLogin], async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    
    const controllerRes = await userController.login(username, password);

    if (controllerRes.isSuccess) {
        res.status(controllerRes.statusCode).send({
            success: true,
            data: controllerRes.data
        });
    } else {
        res.status(controllerRes.statusCode).send({
            success: false,
            data: controllerRes.data
        });
    }
});

router.get('/getJwt', [unpack], async (req, res) => {

    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    res.status(200).send({
        success: true,
        data: obj.data
    });
});


router.put('/changePassword', [unpack, verifyRequsetChangePassword], async (req, res) => {

    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const id = obj.data.user.id;

    const controllerRes = await userController.change(id, req.p1);

    if (controllerRes.isSuccess) {
        res.status(controllerRes.statusCode).send({
            success: true,
            data: controllerRes.data
        });
    } else {
        res.status(controllerRes.statusCode).send({
            success: false,
            data: controllerRes.data
        });
    }
});




module.exports = router; 