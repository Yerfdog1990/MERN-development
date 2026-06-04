let url = "https://jsonplaceholder.typicode.com/users";

let fetchData = fetch(url);

fetchData
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
