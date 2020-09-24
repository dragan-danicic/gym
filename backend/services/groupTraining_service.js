

const compare = require('../services/dateService')

class GroupTrainingService {

    ifTimeWright(date, time) { //checks if passed args are at least an hour in the past 

        const d1 = new Date();
        const d2 = new Date(date);
        
        const c = compare(d1,d2);

    
        if (c < 0) {
            return true;
        } else if (c > 0) {
            return false;
        } else {
            const hour = new Date().getHours();
            const minutes = new Date().getMinutes();
            let now = (hour + 1) + ":" + minutes;
            console.log(now);
            console.log(time);
            console.log(now < time);
            return now < time;
        }
    }

    structureJSON(arr){
        const ret = [];
        arr.forEach(el => {
            const obj = {};
            obj.id = el["Grouptrainings.id"];
            obj.name = el["Grouptrainings.name"]; 
            obj.date = el["Grouptrainings.date"]; 
            obj.time = el["Grouptrainings.time"]; 
            obj.allowedToUnsign = new GroupTrainingService().ifTimeWright(el["Grouptrainings.date"],el["Grouptrainings.time"]);
            ret.push(obj);
        });
        return ret;
    }

}

module.exports = new GroupTrainingService();
