function findPrimes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function printPrimesUpToN(n) {
    const primes = findPrimes(n);
    document.getElementById('output').innerHTML = `Prime numbers less than or equal to ${n}: ${primes.join(', ')}`;
}

const n = 100; // Change this to your desired positive integer
printPrimesUpToN(n);