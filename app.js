

const root = document.getElementById('root');

let pagina = 1;

const getData = async () => {
    const url = `https://api.disneyapi.dev/characters?page=${pagina}`
    const response = await fetch(url)
    const json = await response.json();
    printData(json.data)
}

getData()

const printData = arr =>{
    let card = ``;
    arr.forEach((personaje)=> {
        card = card + `
            <div class="col s12 m6 l3">
            <div class="card">
            <div class="card-image">
                <img src="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png">

                </div>
                <div class="card-content">
                    <p>Aliados</p>
                    <p>Enemigos</p>
                    <p>Pelicula</p>
                    <p>Parques de atracciones</p>
                    <p>Cortos</p>
                    <p>Programas TV</p>
                    <p>Videojuegos</p>
                    <p>Id</p>
                    
                </div>
            <div class="card-action">
                <a href="#">Ver más</a>
            </div>
            </div>
        </div>
        `
    })
    root.innerHTML = card;

}


