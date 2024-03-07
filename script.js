let btn = document.getElementById("btn")
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let getQuote = () => {
    fetch(`https://api.quotable.io/quotes/random`).then((res) => res.json()).then((data) => {
        console.log(data)
        quote.innerHTML = `<q>${data[0].content}</q>`
        author.innerHTML = `--${data[0].author}`

    }).catch((error) => {
        console.log(error)
    })
}

window.addEventListener("load", getQuote)
btn.addEventListener("click", getQuote)