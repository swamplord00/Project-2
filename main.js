const opiniones=[
    {
        estrellas:4,
        producto:"Crema cicatrizante",
        review:"Excelentes resultados, la aplique sobre una cicatriz antigua y he tenido buenos resultados.",
        autor:"Scar"
    }
]

let contenedor=document.getElementById("contenedorOpiniones")
opiniones.forEach((el)=>{
    contenedor.innerHTML+=`<article class="registro">
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
        <button class= editBtn>Editar</button>
        <button class=deleteBtn>Eliminar</button>
    </div>
</article>`
})