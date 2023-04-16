//Arreglo de objetos opinion

// const opiniones=[
//     {
//         estrellas:4,
//         producto:"Crema cicatrizante",
//         review:"Excelentes resultados, la aplique sobre una cicatriz antigua y he tenido buenos resultados.",
//         autor:"Scar",

//     }
// ]

//Tarjeta de ejemplo
const contenedor = document.getElementById("contenedorOpiniones")
// opiniones.forEach((el)=>{
//     contenedor.innerHTML+=`<article class="registro" id=${el.codigo}>
//     <div class=new-star-rating>
//         <a href="#" class="strY">★</a>
//         <a href="#" class="strY">★</a>
//         <a href="#" class="strY">★</a>
//         <a href="#" class="strY">★</a>
//         <a href="#" class="strG">★</a>     
//     </div>
//     <div class="post">
//         <h3> Producto: ${el.producto}</h3>
//         <p>${el.review}</p>
//         <h4>Firma: ${el.autor}</h4>
//     </div>
//     <div class="opciones">
//         <button class=editBtn>Editar</button>
//         <button class=deleteBtn>Eliminar</button>
//     </div>
// </article>`
// })





//  seleccionar Imagen principal del producto

const imgProduct = document.getElementById('imgProduct')

// Seleccionar Producto

const formlistProduct = document.getElementById('dropdownlist')


const setSelectImg = () => {
    let selectedOption = formlistProduct.options[formlistProduct.selectedIndex]
    console.log(`Opcion seleccionada: ${selectedOption.value}`)
    switch (selectedOption.value) {
        case 'Crema':
            imgProduct.src = "./assets/images/crema.jpg"
            break;
        case 'Serum':
            imgProduct.src = "./assets/images/serum.jpg"
            break;
        case 'Jabon':
            imgProduct.src = "./assets/images/jabon.jpg"
            break;
        case 'astringente':
            imgProduct.src = "./assets/images/citricos.jpg"
            break;
        default:
            break;
    }
}

formlistProduct.addEventListener('change', () => setSelectImg())

//CREAR tarjeta de opinion nueva_______________________

const tarjeta = document.createElement('article')

tarjeta.className = 'registro'
tarjeta.id = 'nueva'

// Crear div de valoracion
const stars = document.createElement('div')
stars.className = 'new-star-rating'


let contYstars = 4
let contGstar = 5 - contYstars

for (let i = 0; i < 5; i++) {
    let anchor = document.createElement('a')
    anchor.src = '#'
    anchor.innerText = '★'
    if (i < contYstars) {
        anchor.className = 'strY'
    } else {
        anchor.className = 'strG'
    }
    stars.appendChild(anchor)
}

// Crear div de post

const post = document.createElement('div')
post.className = 'post'

const productName = document.createElement('h3')
productName.innerText = 'Producto:'
const productReview = document.createElement('p')
productReview.innerText = 'reseña de producto'
const sign = document.createElement('h4')
sign.innerText = 'firma:'

post.appendChild(productName)
post.appendChild(productReview)
post.appendChild(sign)

// Crear acciones 

const acciones = document.createElement('div')
acciones.className = 'opciones'

const btnEdit = document.createElement('button')
btnEdit.className = 'editBtn'
btnEdit.innerText = 'Editar'

const btnDelete = document.createElement('button')
btnDelete.className = 'deleteBtn'
btnDelete.innerText = 'Eliminar'

acciones.appendChild(btnEdit)
acciones.appendChild(btnDelete)


tarjeta.appendChild(stars)
tarjeta.appendChild(post)
tarjeta.appendChild(acciones)
contenedor.appendChild(tarjeta)

// Seleccionar inputs formulario
// let starsValue=0;

// const formrReview=document.getElementById('opinion')
// // const formRadios=document.getElementsByName('str')
// const formRadios1=document.getElementById('1str')
// const formRadios2=document.getElementById('2str')
// const formRadios3=document.getElementById('3str')
// const formRadios4=document.getElementById('4str')
// const formRadios5=document.getElementById('5str')
// const formSign=document.getElementById('firma')


// // Crear EventListener

// formRadios1.addEventListener('input',handlerInput)
// formRadios2.addEventListener('input',handlerInput)
// formRadios3.addEventListener('input',handlerInput)
// formRadios4.addEventListener('input',handlerInput)
// formRadios5.addEventListener('input',handlerInput)
// formlistProduct.addEventListener('input',handlerInput)
// formrReview.addEventListener('input',handlerInput)
// formSign.addEventListener('input',handlerInput)

//  Seleccionar inputs y asignar eventos 

const ids = ['opinion', 'dropdownlist', '1str', '2str', '3str', '4str', '5str', 'firma']

ids.forEach((id) => {
    const element = document.getElementById(id)
    element.addEventListener('input', handlerInput)
})
// Crear Array y cargar objetos desde el LS
const reviewsArrays = []




// Crear objeto
let reviewObject = {}
function handlerInput(event) {
    // console.log(event.target.value)
    const { value, name } = event.target
    reviewObject = {
        ...reviewObject,
        [name]: value
    }
    console.log(reviewObject)
}

// seleccionar bton formulario
const btnAdd = document.getElementById('add')


//Agregar evento a boton para publicar Review
btnAdd.addEventListener('click', agregarReview)

function agregarReview(evento) {
    evento.preventDefault();
    alert("hicieron click")
    console.log(Object.values(reviewObject))
    if (validarForm()) {
        let id = Date.now()
        reviewObject = { ...reviewObject, id }
        reviewsArrays.push(reviewObject)
        console.log(reviewsArrays)
        crearTarj(reviewsArrays)
    } else {
        return;
    }
    
}


//Validar form

let primaryKey
let isEditing = false
let idEditing = null


function validarForm() {

    return true
}

function crearTarj(array) {

    array.forEach((Nreview)=>{

        const tarjeta = document.createElement('article')
    
        tarjeta.className = 'registro'
        tarjeta.id = `${Nreview.id}`
    
        // Crear div de valoracion
        const stars = document.createElement('div')
        stars.className = 'new-star-rating'
        
        if(Nreview.str==undefined){Nreview.str='5'}

        console.log(Nreview.str)

        let contYstars = Number(Nreview.str)
        let contGstar = 5 - contYstars
    
        for (let i = 0; i < 5; i++) {
            let anchor = document.createElement('a')
            anchor.src = '#'
            anchor.innerText = '★'
            if (i < contYstars) {
                anchor.className = 'strY'
            } else {
                anchor.className = 'strG'
            }
            stars.appendChild(anchor)
        }
    
        // Crear div de post
    
        const post = document.createElement('div')
        post.className = 'post'
    
        const productName = document.createElement('h3')
        productName.innerText = `Producto: ${Nreview.dropdownlist}`
        const productReview = document.createElement('p')
        productReview.innerText = `reseña de producto: ${Nreview.review}`
        const sign = document.createElement('h4')
        sign.innerText = `firma: ${Nreview.firma} `
    
        post.appendChild(productName)
        post.appendChild(productReview)
        post.appendChild(sign)
    
        // Crear acciones 
    
        const acciones = document.createElement('div')
        acciones.className = 'opciones'
    
        const btnEdit = document.createElement('button')
        btnEdit.className = 'editBtn'
        btnEdit.innerText = 'Editar'
        
        const btnDelete = document.createElement('button')
        btnDelete.className = 'deleteBtn'
        btnDelete.innerText = 'Eliminar'

        acciones.appendChild(btnEdit)
        acciones.appendChild(btnDelete)
    
    
        tarjeta.appendChild(stars)
        tarjeta.appendChild(post)
        tarjeta.appendChild(acciones)
        contenedor.appendChild(tarjeta)
    })
}
// btnEdit.setAttribute('onclick',´editRow(${id})´)


function registrarLS(){

}