// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call or asynchronous operation
    setTimeout(() => {
      // Resolve the Promise with some response
      resolve("API response data");
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
