// async function fn() {
  
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 3000);
//     });
    
//     let result = await promise; // wait until the promise resolves 
    
//     console.log(result); // "done!"
//   }
//   fn(); //kör en funktion som tar 3 sekunder

  async function fn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000);
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "done!"
  }
  // Kör 3 funktioner som borde ta 3 sekunder
  // Nu tar alla 3 ungefär 3 sekunder
  fn();
  fn();
  fn();