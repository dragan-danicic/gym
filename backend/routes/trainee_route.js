const express = require("express")
const unpack = require("../middlewares/unpack");
const verify = require("../middlewares/verify");
const checkRole = require("../middlewares/checkRole");
const TRAINEE = require("../services/constants").TRAINEE;
const router = new express.Router();
const groupTrainingController = require("../controllers/groupTraining_controller");
const verifyRequestRemoveFromTraining = require("../middlewares/verifyRequestRemoveFromTraining");
const verifyRequestSignUpGroupTraining = require("../middlewares/verifyRequestSignUpGroupTraining");

router.get('/getAllMineTrainee', [unpack], async (req, res) => {


    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const user = obj.data.user;
    const ok = checkRole(TRAINEE, user.role)
    if (ok) {
        const controllerRes = await groupTrainingController.getAllMineTrainee(user.id);
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

router.delete('/removeFromTraining', [unpack,verifyRequestRemoveFromTraining], async (req, res) => {

    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    const ok = checkRole(TRAINEE, user.role)
    if (ok) {
        const controllerRes = await groupTrainingController.remove(user.id,req.body.trainingId);
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


router.post('/signUpGroupTraining', [unpack,verifyRequestSignUpGroupTraining], async (req, res) => {

    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    const ok = checkRole(TRAINEE, user.role)
    if (ok) {
        const controllerRes = await groupTrainingController.signUp(user.id,req.body.trainingId);
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