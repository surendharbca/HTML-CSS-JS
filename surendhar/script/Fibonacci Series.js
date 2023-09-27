function printFibonacciSeries(n) {
    let fib = [0, 1]; // Initialize the Fibonacci series with the first two numbers

    for (let i = 2; fib[i - 1] + fib[i - 2] <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    for (let i = 0; i < fib.length; i++) {
        document.write(fib[i] + " ");
    }
}

const numberToPrintUpTo = 100; // Replace with the number you want to print up to
document.write("Fibonacci series up to " + numberToPrintUpTo + ": ");
printFibonacciSeries(numberToPrintUpTo);
