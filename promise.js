// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
    if(true) { // Allt funkar
        resolve("Success!");    
    } else { // Något gick fel
        reject("Error!");
    }
});


myPromise1.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});


const myPromise2 = new Promise((resolve, reject) => {
    try {       
        setTimeout(() => resolve("Success!"), 1000);
    } catch (error) {
        reject("Error!");
    }
});

myPromise2.then((message) => {
    console.log(message);
});


const promise = new Promise((resolve, reject) =>  {
    if (true) {
      resolve("Success. Promise was resolved");
    } else {
      reject("Fail. Promise was rejected");
    }
  });

  promise.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.log(message);
  });