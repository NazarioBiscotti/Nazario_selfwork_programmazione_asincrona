//  Creare un file .json che rappresenti un array di prodotti. Ciascun prodotto dovrà avere un nome, una categoria ed un prezzo. Creare delle funzioni async-await che permettano di prendere i dati contenuti nel .json e mostrare delle card sulla landing page con tutti i dettagli del prodotto. Implementare le seguenti features:
// Utilizzare i moduli per le funzioni asincrone
// Aggiungere un loader che scompare dopo qualche secondo


let loader = document.querySelector("#loader");
let wrapper = document.querySelector("#wrapper");


function timeOut(callback) {

    setTimeout(callback, 3000)

}

function createCards(element) {

    let card = document.createElement("div")
    card.classList.add("col-3", "border", "border-secondary", "m-3", "p-2", "fs-3")
    card.innerHTML = `<div> Name : ${element.name}</div>
                <div> Category : ${element.category}</div>
                <div>Price : ${element.price}</div>`

    return card
}

function addCards(data) {


    data.forEach(el => {

        let card = createCards(el)
        wrapper.appendChild(card)

    });

}

let getData = async () => {

    let promise = await fetch("/list.json")
    let data = await promise.json()
    loader.classList.add("d-none")
    return addCards(data)
}
timeOut(getData)
