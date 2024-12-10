const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Ettan vann!");
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Tvåan vann!");
  });

  Promise.race([p1, p2]).then(value => {
    console.log(value);
  });