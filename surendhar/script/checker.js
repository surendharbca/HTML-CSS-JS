function isPerfectNumber(num) {
    if (num <= 0) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; // sum= sum+i;
        }
    }

    return sum === num;
}

const numberToCheck = 50; // Replace with the number you want to check
const isPerfect = isPerfectNumber(numberToCheck);

if (isPerfect) {
    document.write(numberToCheck + " is a perfect number.");
} else {
    document.write(numberToCheck + " is not a perfect number.");
}