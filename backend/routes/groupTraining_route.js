const express = require("express")
const groupTrainingController = require("../controllers/groupTraining_controller");
const verify = require("../middlewares/verify");
const unpack = require("../middlewares/unpack");
const checkRole = require("../middlewares/checkRole");
const verifyRequestMakeGroupTraining = require("../middlewares/verifyRequestMakeGroupTraining")
const TRAINER = require("../services/constants").TRAINER;
const router = new express.Router();


router.get('/getGroupTrainings', [unpack], async (req, res) => {


    let obj = await verify(req);
    if(!obj.status){
        const err = obj.data;
        res.status(401).send({sucess:false,data:err.message});
        return;
    }
    
    const controllerRes = await groupTrainingController.getFuture();

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

router.post('/makeGrouptraining', [unpack,verifyRequestMakeGroupTraining], async (req, res) => {


    let obj = await verify(req);
    if(!obj.status){
        const err = obj.data;
        res.status(401).send({sucess:false,data:err.message});
        return;
    }
    const name = req.body.name;
    const date = req.body.date;
    const time = req.body.time;
    
    const user = obj.data.user;
    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await groupTrainingController.make(name,date,time,user.id);
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

router.get('/getTrainingsUnique', [unpack], async (req, res) => {


    let obj = await verify(req);
    if(!obj.status){
        const err = obj.data;
        res.status(401).send({sucess:false,data:err.message});
        return;
    }

    const user = obj.data.user;
    const ok = checkRole(TRAINER, user.role);

    if (ok) {
        const controllerRes = await groupTrainingController.getUnique(user.id);

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