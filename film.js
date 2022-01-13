const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

fetch('https://ghibliapi.herokuapp.com/films/' + urlParams.get('id'))
.then(response => response.json())
.then(data => console.log(data));