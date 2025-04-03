function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function calculateHypotenuse(a, b) {
    const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return hypotenuse;
}

function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    for (let elem of set1) {
        if (set2.has(elem)) {
            console.log(`${elem} is common between ${arr1.join(', ')}`);
            break;
        }
    }
}

// Example usage:
const num1 = 3;
const num2 = 5;
calculateHypotenuse(num1, num2);
findCommonElements([1, 2, 3], [4, 5, 6, 7]);
