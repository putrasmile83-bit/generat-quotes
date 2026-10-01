let quotes = document.getElementById('quotes')
let author = document.getElementById('author')

console.log(quotes);
console.log(author);

async function getDataApi() {
    
    try {
        let response = await fetch('https://dummyjson.com/quotes/random');

        let data = await  response.json();
        console.log(data);
        console.log(data.quote);
        console.log(data.author);

        quotes.innerHTML = data.quote;
        author.innerHTML = data.author;
    } catch (error) {
        console.log("error nya" + error);
        
    }
}
getDataApi();