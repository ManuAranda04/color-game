let colors = [];
let numCuadrados = 6;
let pickedColor;
let square = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay")
let message = document.querySelector("#message")
let botonReset = document.querySelector("#reset")
let botonDificultad = document.querySelectorAll(".dificultad")
let h1 = document.querySelector("h1")
init();

function init(){
    checkearCuadrados();
    cambiarDificultad();
    reset();
}

function randomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255) 
    let b = Math.floor(Math.random() * 255)
    return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColors(num){
    let col = []
    for(let i = 0; i < num; i++){
        col[i]=randomColor()
    }
    return col
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function cambiarColores(color){
    for(let i = 0; i < square.length; i++){
        square[i].style.background = color
    }
}

function checkearCuadrados(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener("click", function(){
            let ColorClickeado = this.style.background
            if(ColorClickeado === pickedColor){
                message.textContent = "Correcto!"
                botonReset.textContent = "Jugar de Nuevo"
                cambiarColores(ColorClickeado)
                square.forEach((squares) => squares.classList.remove("mal"));
                h1.style.background = ColorClickeado
            }
            else{
                this.classList.add("mal")
                message.textContent = "Intentalo de Nuevo"
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numCuadrados);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for(let i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.background = colors[i]
            square[i].style.display = "block"
        }
        else{
            square[i].style.display="none"
        }
    }
    h1.style.background = "royalblue"
    message.textContent = ""
    botonReset.textContent = "Nuevos Colores"
}

botonReset.addEventListener("click", function(){
    reset()
})

function cambiarDificultad(){
    for(let i = 0; i < botonDificultad.length; i++){
        botonDificultad[i].addEventListener("click", function(){
            botonDificultad[0].classList.remove("selected")
            botonDificultad[1].classList.remove("selected")
            this.classList.add("selected")
            if(this.textContent === 'Hard'){
                numCuadrados = 6
            }
            else{
                numCuadrados = 3
            }
            reset()
        })
    }
}