// Use Promises
fetchData()
  .then((data) => processData(data))
  .then((processedData) => renderData(processedData))
  .catch((error) => console.error(error));
