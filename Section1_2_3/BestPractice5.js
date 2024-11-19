// Use of Graceful Error Handling
async function fetchDataWithFallback() {
    try {
        const data = await fetch(primaryUrl);
        return data;
    } catch (error) {
        return await fetch(backupUrl); // Fallback to a secondary source
    }
    }
    