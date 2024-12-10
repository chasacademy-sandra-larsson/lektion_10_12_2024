async function fn() {
  
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000);
    });
    
    let result = await promise; // wait until the promise resolves 
    
    console.log(result); // "done!"
  }
  fn(); //kör en funktion som tar 3 sekunder