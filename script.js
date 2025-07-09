let getSearch = document.querySelector('#search');
let getDiv = document.querySelector('#main');

let value = "babar azam" || getSearch.value;

fetch(`https://newsdata.io/api/1/latest?apikey=pub_574b8729be904dc18508df4de2563ca5&q=${value}`)
.then((data)=> data.json())

.then((data)=> {
    console.log(data.results)
    data.results.map((item)=> {
        getDiv.innerHTML += `<img src="${item.image_url}" alt="News Image">
          <div class="news-content">
            <h3>${item.category}</h3>
            <p>${item.description.slice(0, 100) || 'No description available'}</p>
            <a href="${item.link}" target="_blank">Read More</a>
          </div>`
    })
})
.catch((err)=> {
    console.log(err)
})

function searchButton() {
    getDiv.innerHTML = ""

    fetch(`https://newsdata.io/api/1/latest?apikey=pub_574b8729be904dc18508df4de2563ca5&q=${getSearch.value}`)
.then((data)=> data.json())

.then((data)=> {
    console.log(data.results)
    data.results.map((item)=> {
        getDiv.innerHTML += `<img src="${item.image_url}" alt="News Image">
          <div class="news-content">
            <h3>${item.category}</h3>
            <p>${item.description.slice(0, 100) || 'No description available'}</p>
            <a href="${item.link}" target="_blank">Read More</a>
          </div>`
    })
})
.catch((err)=> {
    console.log(err)
})


}