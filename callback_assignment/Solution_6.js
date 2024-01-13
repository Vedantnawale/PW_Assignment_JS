// Fetch results asynchronously.
async function fetchDataFromAPI() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchDataFromAPI();
  