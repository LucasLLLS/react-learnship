"use strict";

var multipliers = {
    numbers: [1, 4, 5],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multipliers.multiply());
