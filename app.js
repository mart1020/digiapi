

let pagina = 1;

const getData = async () => {
    const url = `https://www.digi-api.com/api/v1/digimon?page=0${pagina}`
    const response = await fetch(url)
    const json = await response.json();
    printData(json)
}

getData()

const printData = arr => {
    console.log(arr)
}

