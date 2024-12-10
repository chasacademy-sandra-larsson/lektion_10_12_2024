// // Skapa en egen Promise


// const myPromise = new Promise((resolve, reject) => {
//     // Om allt funkar
//     if(true) {
//         resolve("Success. Promise was resolved");
//     } else {
//         reject("Fail. Promise was rejected")
//     }
// });


// myPromise
// .then((data) => {
//     console.log(data)})
// .catch((data) => {
//     console.log(data)
// })

// async function getData() {
//     try {
//         const response = await myPromise;
//         console.log(response);
//     } catch(error) {
//         console.log(error)

//     } 
// }

// getData();

fetch("https://jsonplaceholder.typicode.com/todos/")
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.log(error));