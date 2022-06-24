console.log('Hello, I will attempt to complete the FizzBuzz Test!');

for(i = 0; i <= 100; i++){
    if(Number.isInteger(i/3) && Number.isInteger(i/5)){
        console.log(`${i} is a multiple of 3 and 5...FizzBuzz`);
    } else if (Number.isInteger(i/3)) {
        console.log(`${i} is a multiple of 3...Fizz`);
    } else if (Number.isInteger(i/5)){
        console.log(`${i} is a mutliple of 5...Buzz`);
    } else {
        console.log(`${i} is not a multiple of either`)
    }
};