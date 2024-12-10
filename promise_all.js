// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1 * 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2 * 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3 * 1000);
//   });
  
//   Promise.all([p1, p2, p3]).then((results) => {
//     const total = results.reduce((p, c) => p + c);
  
//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   });

// Practical example of using promise.all when fetching data from multiple sources

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

const urls = ['https://jsonplaceholder.typicode.com/users', 
  'https://jsonplaceholder.typicode.com/posts', 
  'https://jsonplaceholder.typicode.com/comments'];

async function fetchAllData() {
    try {
        const data = await Promise.all(urls.map(url => fetchData(url)));
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchAllData();