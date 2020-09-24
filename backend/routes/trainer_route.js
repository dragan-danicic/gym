const express = require("express")
const unpack = require("../middlewares/unpack");
const verify = require("../middlewares/verify");
const checkRole = require("../middlewares/checkRole");
const verifyRequestAddNewTrainee = require("../middlewares/verifyRequestAddNewTrainee");
const TRAINER = require("../services/constants").TRAINER;
const router = new express.Router();
const trainerController = require("../controllers/trainer_controller");
const groupTrainingController = require("../controllers/groupTraining_controller");
const verifyRequestGetMyStats = require("../middlewares/verifyRequestGetMyStats");
const verifyRequestGetTrainersStats = require("../middlewares/verifyRequestGetTrainersStats");

const trainerService = require("../services/trainer_service");

router.post('/addNewTrainee', [unpack, verifyRequestAddNewTrainee], async (req, res) => {

    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await trainerController.addNewTrainee(req.body.username, '123456', req.body.firstName, req.body.lastName, req.body.phone);
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

router.get('/getAllMineTrainer', [unpack], async (req, res) => {


    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const user = obj.data.user;
    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await groupTrainingController.getAllMineTrainer(user.id);
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

router.get('/getTrainee', [unpack], async (req, res) => {

    const obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }
    const user = obj.data.user;
    const id = req.query.id;
    if (id == null) {
        res.status(500).send({ sucess: false, data: "Some data is missing!!" });
        return;
    }
    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await trainerController.getTrainee(id)
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

router.get('/getMyStats', [unpack,verifyRequestGetMyStats], async (req, res) => {


    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const user = obj.data.user;

    
    
    const training = req.headers['training'];
    const date1 = req.headers['date1'];
    const date2 = req.headers['date2'];
   
    const retService = await trainerService.checkRequest(user.id,training);
    
    if(!retService){
        res.status(404).send({ sucess: false, data: "There is no your trainnings with that name!!" });
        return;
    }

    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await trainerController.getMyStats(user.id,training,date1,date2);
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


router.get('/getTrainersStats', [unpack,verifyRequestGetTrainersStats], async (req, res) => {


    let obj = await verify(req);
    if (!obj.status) {
        const err = obj.data;
        res.status(401).send({ sucess: false, data: err.message });
        return;
    }

    const user = obj.data.user;

    const date1 = req.headers['date1'];
    const date2 = req.headers['date2'];
   

    const ok = checkRole(TRAINER, user.role)
    if (ok) {
        const controllerRes = await trainerController.getTrainersStats(date1,date2);
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