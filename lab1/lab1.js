// // ______________________________________
// // Task 1

// function* generate(start = 1) {
//     let i = start; 

//     while (true) {
//         yield i;
//         i++;
//   }
// }

// const gen = generate(5);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);





// // ______________________________________
// // Task 2

// function* generate(start = 1) {
//     let i = start;

//     while (true) {
//         yield i++;
//     }
// }

// function consumeWithTimeout(genObj, durationSeconds, pauseMs = 300) {
//     const interval = setInterval(() => {
//         const value = genObj.next().value;
//         console.log(value);
//     }, pauseMs);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("The end");
//     }, durationSeconds * 1000);
// }

// const myGen = generate(5);
// consumeWithTimeout(myGen, 3);