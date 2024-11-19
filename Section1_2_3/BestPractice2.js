// Use Async/Await
async function handleData() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        renderData(processedData);
    } catch (error) {
        console.error(error);
    }
    }