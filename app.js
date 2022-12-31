

const root = document.getElementById('root');
const loader = document.getElementById('contenedor');


//------------------------------------------
//filtro
//------------------------------------------

const todos = document.getElementById('todos') 
const Training = document.getElementById('Training') 
const Rookie = document.getElementById('Rookie') 
const Champion = document.getElementById('Champion') 
const Fresh = document.getElementById('Fresh') 
const Mega = document.getElementById('Mega') 
const Ultimate = document.getElementById('Ultimate') 
const Armor = document.getElementById('Armor') 






//----------------------------------------
let pagina = 1;

const getData = async () => {
    const url = `https://digimon-api.vercel.app/api/digimon?page=${pagina}`
    const response = await fetch(url)
    const json = await response.json();
    printData(json)
    console.log(json)
    setTimeout(() => {
       root.classList.remove('esconder')
       loader.classList.add('esconder')
       },1200)
       data = json;
    }
    
    //let data = {};

getData()

//----------------------------------------
//tarjetas
//----------------------------------------

const printData = arr =>{
    let card = ``;
    arr.forEach((personaje)=> {
        card = card + `
            <div class="col s12 m6 l2">
            <div class="card">
            <div class="card-image">
                <img src=${personaje.img}>

                </div>
                <div class="card-content">
                    <p>Nombre: ${personaje.name}<p>
                    <p>nivel: ${personaje.level}</p>
                    
                </div>
            <div class="card-action">
                
            </div>
            </div>
        </div>
        `
    })
    root.innerHTML = card;

}

//-----------------------------------------------
// filtros
//-------------------------------------------
Training.addEventListener('click',() => {
    const arr = data;
    const arrTraining = arr.filter(personaje => personaje.level == 'In Training')
    printData(arrTraining)
})

Rookie.addEventListener('click',() => {
    const arr = data;
    const arrRookie = arr.filter(personaje => personaje.level == 'Rookie')
    printData(arrRookie)
})

Champion.addEventListener('click',() => {
    const arr = data;
    const arrChampion = arr.filter(personaje => personaje.level == 'Champion')
    printData(arrChampion)
})


Fresh.addEventListener('click',() => {
    const arr = data;
    const arrFresh = arr.filter(personaje => personaje.level == 'Fresh')
    printData(arrFresh)
})

Mega.addEventListener('click',() => {
    const arr = data;
    const arrMega = arr.filter(personaje => personaje.level == 'Mega')
    printData(arrMega)
})

Ultimate.addEventListener('click',() => {
    const arr = data;
    const arrUltimate = arr.filter(personaje => personaje.level == 'Ultimate')
    printData(arrUltimate)
})

Armor.addEventListener('click',() => {
    const arr = data;
    const arrArmor = arr.filter(personaje => personaje.level == 'Armor')
    printData(arrArmor)
})

todos.addEventListener('click',() => {
    const arr = data;
    printData(arr)
})

