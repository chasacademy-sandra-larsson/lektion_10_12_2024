const myPromise = new Promise((resolve, reject) =>  {
    if (true) {
      resolve("Success. Promise was resolved");
    } else {
      reject("Fail. Promise was rejected");
    }
  });

  
  myPromise.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.log(message);
  });



  const promisFail = new Promise((resolve, reject) => {
    if(false) {
        resolve("Success. Promise was resolved");
    } else {
        throw new Error("An error occured!");
    }
  });

promisFail.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});