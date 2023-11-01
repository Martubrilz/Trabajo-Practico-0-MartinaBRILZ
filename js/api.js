
const URL ='https://api.thecatapi.com/v1/images/search';

fetch(URL)
.then(Response=> Response.json())
.then(Data => {
const img = document.querySelector('img');
img.src = data[0].url;
});
   