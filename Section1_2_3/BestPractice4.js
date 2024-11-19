// Use of Promise All
async function fetchDataFromMultipleSources() {
    const [data1, data2, data3] = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
    console.log(data1, data2, data3);
}