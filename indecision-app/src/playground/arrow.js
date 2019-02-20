const multipliers = {
    numbers: [1, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    },
};

console.log(multipliers.multiply());