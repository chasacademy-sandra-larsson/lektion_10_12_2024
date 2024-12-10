const flipACoin = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("Krona");
    } else {
        reject("Klave");
    }
});

// async function flipCoin() {
//     try {
//         const result = await flipACoin;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

flipACoin.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

//flipCoin();