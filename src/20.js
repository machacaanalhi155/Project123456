function drawRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

const randomArray = drawRandomArray(5);
console.log(randomArray);
