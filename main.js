//Arreglo de objetos opinion
let codigoP=0;
const opiniones=[
    {
        estrellas:4,
        producto:"Crema cicatrizante",
        review:"Excelentes resultados, la aplique sobre una cicatriz antigua y he tenido buenos resultados.",
        autor:"Scar",
        codigo:codigoP
    }
]

//Tarjeta de ejemplo
const contenedor=document.getElementById("contenedorOpiniones")
opiniones.forEach((el)=>{
    contenedor.innerHTML+=`<article class="registro" id=${el.codigo}>
    <div class=new-star-rating>
        <a href="#" class="strY">★</a>
        <a href="#" class="strY">★</a>
        <a href="#" class="strY">★</a>
        <a href="#" class="strY">★</a>
        <a href="#" class="strG">★</a>     
    </div>
    <div class="post">
        <h3> Producto: ${el.producto}</h3>
        <p>${el.review}</p>
        <h4>Firma: ${el.autor}</h4>
    </div>
    <div class="opciones">
        <button class=editBtn>Editar</button>
        <button class=deleteBtn>Eliminar</button>
    </div>
</article>`
})




// seleccionar bton formulario
const addBtn=document.getElementById('add')
console.log(addBtn)

//Agregar evento a boton para publicar Review

const agregarReview=()=>{
    alert("hicieron click")
}
addBtn.addEventListener('click',()=>agregarReview())

//  seleccionar Imagen principal del producto

const imgProduct=document.getElementById('imgProduct')

// Seleccionar Producto

const listProduct=document.getElementById('dropdownlist')


const setSelectImg=()=>{
    let selectedOption=listProduct.options[listProduct.selectedIndex]
    console.log(`Opcion seleccionada: ${selectedOption.value}`)
    switch (selectedOption.value){
        case 'Crema':
            imgProduct.src="./assets/images/crema.jpg"
            break;
        case 'Serum':
            imgProduct.src="./assets/images/serum.jpg"
            break;
        case 'Jabon':
            imgProduct.src="./assets/images/jabon.jpg"
            break;
        case 'astringente':
            imgProduct.src="./assets/images/citricos.jpg"
            break;
        default:
            break;
    }
}

listProduct.addEventListener('change',()=>setSelectImg())


