function getDays(year, month) {
    if (typeof year == 'undefined' || typeof month == 'undefined') {
        return 'error';
    }
    if (typeof year !== 'number' || year < 0 || month < 0) {
        return "year or month is not correct";
    }
    arrMonthes = [, 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    if (typeof month == 'string') {
        month = month.toLowerCase()
        var newMonth = 0;
        for (var i = 1; i < arrMonthes.length; i++) {
            if (month == arrMonthes[i]) {
                newMonth += i;
            }
        }
        if (newMonth == 0) {
            return 'try again';
        }
        var days = new Date(year, newMonth, 0).getDate()
        return days;
    }
    else if (typeof month == 'number') {
        var days = new Date(year, month, 0).getDate()
        return days;
    }
    else return 'error';
}




Number.prototype.isOdd = function (number) {
    if (typeof number != "number") {
        return 'error';
    }
    if (number < 0) {
        number *= -1;
    }
    if (number % 2 == 1) {
        return true;
    }
    else return false;
}





function every(arr, func) {
    if (typeof arr == 'undefined' || typeof func == 'undefined') {
        return 'error';
    }
    var countTrue = 0;
    var countFalse = 0;
    if (!Array.isArray(arr)) {
        return 'error';
    }
    if (typeof func != 'function') {
        return 'error';
    }
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i]) == true) {
            countTrue += 1;
        }
        else countFalse += 1;
    }
    if (countTrue == 0 || countFalse == 0) {
        return true;
    }
    else return false;
}


module.exports = { getDays, every };