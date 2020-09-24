function compare(d1, d2) { //this method returns -1 if d1 < d2, 1 if d1>d2, and 0 if d1 === d2

    if (d1.getFullYear() < d2.getFullYear()) {
        return -1;
    } else if (d1.getFullYear() > d2.getFullYear()) {
        return 1;
    } else {
        if (d1.getMonth() < d2.getMonth()) {
            return -1;
        } else if (d1.getMonth() > d2.getMonth()) {
            return 1;
        } else {
            if (d1.getDate() < d2.getDate()) {
                return -1;
            } else if (d1.getDate() > d2.getDate()) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

module.exports = compare;