Array.prototype.myMap = function (callback) {
    const output = [];

    for (let index = 0; index < this.length; index++) {
        output.push(callback(this[index], index, this));
    }

    return output;
};

Array.prototype.myFilter = function (callback) {
    const output = [];

    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this) === true) {
            output.push(this[index]);
        }
    }

    return output;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let index = 0; index < this.length; index++) {
        if (index === 0 && initialValue === undefined) {
            accumulator = this[index];
        }
        else {
            accumulator = callback(accumulator, this[index], index, this);
        }
    }

    return accumulator;
};

// testing above methods
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

console.log(arr.myMap((item) => item * 2));
console.log(arr2.map((item) => item * 2));

console.log(arr.myFilter((item) => item % 2 === 0));
console.log(arr2.filter((item) => item % 2 === 0));

console.log(arr.myReduce((accumulator, item) => accumulator + item));
console.log(arr2.reduce((accumulator, item) => accumulator + item));