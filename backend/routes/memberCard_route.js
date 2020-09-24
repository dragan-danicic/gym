const express = require("express")
const unpack = require("../middlewares/unpack");
const verify = require("../middlewares/verify");
const checkRole = require("../middlewares/checkRole");
const memberCardController = require("../controllers/memberCard_controller");
const router = new express.Router();
const TRAINER = require("../services/constants").TRAINER;
const verifyRequestChargeAMemberCard = require("../middlewares/verifyRequestChargeAMemberCard");
const verifyRequestEvidentArriving = require("../middlewares/verifyRequestEvidentArriving");

router.get('/getMembercards', [unpack], async (req, res) => {

    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    let id = user.id;
    if (req.query.id) {
        const ok = checkRole(TRAINER, user.role);
        if (ok) {
            id = req.query.id; 
        } else {
            res.status(403).send({
                success: false,
                data: "Your role is not good."
            });
            return;
        }
    }
    const controllerRes = await memberCardController.getMemberCards(id);
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

router.post('/chargeAMemberCard', [unpack,verifyRequestChargeAMemberCard], async (req, res) => {

    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const idTrainee = req.body['id'];
    const duration = req.body['duration'];

    const user = obj.data.user;

    const ok = checkRole(TRAINER, user.role);
    if (ok) {
        const controllerRes = await memberCardController.charge(idTrainee, duration);
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
    } else {
        res.status(403).send({
            success: false,
            data: "Your role is not good."
        });
    }
});


router.put('/evidentArriving', [unpack,verifyRequestEvidentArriving], async (req, res) => {

    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const idTrainee = req.body['id'];

    const user = obj.data.user;

    const ok = checkRole(TRAINER, user.role);
    if (ok) {
        
        const controllerRes = await memberCardController.evident(idTrainee);
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
    } else {
        res.status(403).send({
            success: false,
            data: "Your role is not good."
        });
    }
});







module.exports = router; 