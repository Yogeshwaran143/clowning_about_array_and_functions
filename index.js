let greatestOfTwoNumbers = (a, b) => {
    return a > b ? a : b;
}
console.log('greatestOfTwoNumbers : ', greatestOfTwoNumbers(5, 10));

let findScaryWord = (word) => {
    let length = 0;
    let longestWord = '';
    for(each of word) {
        if (each.length > length) {
            length = each.length;
            longestWord = each;
        }
    }
    return longestWord;
}
let Words = ['George', 'Alice','Alex','Infanta','John','Xavior','LourdhAntony']
console.log('findScaryWord : ', findScaryWord(Words));

let netPrice = (number) => {
    let sumOfAll = 0;
    for(each of number) {
        sumOfAll += each
    }
    return sumOfAll;
}
let Price = [200, 100, 120, 108, 135, 162, 25, 170, 80, 110]
console.log('netPrice : ', netPrice(Price));

let sumOfArray = (number) => {
    let sumOfAll = 0;
    for(each of number) {
        if (isNaN(each)) {
            sumOfAll += each.length;
        } else {
            sumOfAll += each;
        }
    }
    return sumOfAll;
}
mixedArray = [63, 122, 'Audi', 61, "true", 'Volvo', '20', 'Lamborgini', 38, 156]
console.log('sumOfArray : ', sumOfArray(mixedArray));

console.log('midPoint : ', netPrice(Price)/Price.length);

let Levels = [22, 16, 9, 10, 7, 14, 11, 9];
console.log('midPointOfLevels : ', netPrice(Levels)/Levels.length);

let items = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'sugar', 'salt'];
console.log('averageWordLength : ', sumOfArray(items)/items.length);

console.log('averageWordLength : ', sumOfArray(mixedArray)/mixedArray.length);

let indexOf = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'sugar', 'salt', 'egg', 'flour', 'jam'];
console.log('indexOf : ', [...new Set(indexOf)]);

let searchElement = ['door', 'window', 'ceiling', 'roof', 'Plinth', 'tiles','ceiling', 'flooring'];
searchElementOf = (word, key) => {
    for(each of word) {
        if (each === key) {
            return true;
        } else {
            return false;
        }
    }
}
console.log('searchElement : ', searchElementOf(searchElement, 'door'));

howManyTimesElementsRepeated = (word, key) => {
    count = 0;
    for(each of word) {
        if (each === key) {
            count += 1
        }
    }
    return count;
}
console.log('howManyTimesElementsRepeated : ', howManyTimesElementsRepeated(searchElement, 'ceiling'));

const maximumProduct = (matrix) => {
    let sum = 1;
    let product = 0;
    for(i = 0;i < 10;i++) {
        for(j = 0;j < 10;j++) {
            sum = sum * matrix[j][i];
        }
        product = greatestOfTwoNumbers(product, sum);
    }
    return product;
}
const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 21, 31, 41, 51, 61, 71, 81, 91, 101],
    [12, 22, 32, 42, 52, 62, 72, 82, 92, 102],
    [13, 23, 33, 43, 53, 63, 73, 83, 93, 103],
    [14, 24, 34, 44, 54, 64, 74, 84, 94, 104],
    [15, 25, 35, 45, 55, 65, 75, 85, 95, 105],
    [16, 26, 36, 46, 56, 66, 76, 86, 96, 106],
    [17, 27, 37, 47, 57, 67, 77, 87, 97, 107],
    [18, 28, 38, 48, 58, 68, 78, 88, 98, 108],
    [19, 29, 39, 49, 59, 69, 79, 89, 99, 109],
];
console.log('maximumProduct : ', maximumProduct(matrix));
