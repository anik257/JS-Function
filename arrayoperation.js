function sumOfNumbers (numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
        return sum;
    }
}

const numbs = [54, 65, 77, 78];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is',sum)