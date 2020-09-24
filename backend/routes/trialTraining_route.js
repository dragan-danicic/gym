const express = require("express")
const trialTrainingController = require("../controllers/trialTraining_controller");
const verifyRequestTrialTraining = require("../middlewares/verifyRequestTrialTraining");
const verifyRequestDeleteTrialTraining = require("../middlewares/verifyRequestDeleteTrialTraining");
const router = new express.Router();
const unpack = require("../middlewares/unpack");
const verify = require("../middlewares/verify");
const checkRole = require("../middlewares/checkRole");
const TRAINER = require("../services/constants").TRAINER;

router.post('/trialTraining', [verifyRequestTrialTraining], async (req, res) => {


    const controllerRes = await trialTrainingController.add(req.body.name,req.body.phone,req.body.message);

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



router.get('/getTrialTrainings', [unpack], async (req, res) => {


    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await trialTrainingController.get();

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


router.delete('/doneTrialTraining', [unpack,verifyRequestDeleteTrialTraining], async (req, res) => {

    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const controllerRes = await trialTrainingController.delete(req.body.id);

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