

const root = document.getElementById('root');

let pagina = 1;

const getData = async () => {
    const url = `https://api.disneyapi.dev/characters?page=${pagina}`
    const response = await fetch(url)
    const json = await response.json();
    console.log(json)
}

getData()


