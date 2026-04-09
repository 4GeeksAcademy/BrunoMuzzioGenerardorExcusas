import "bootstrap";
import "./style.css";

window.onload = function() {
  


const mainContendor = document.createElement("div")
document.body.appendChild(mainContendor)

const divTitulo = document.createElement("div")
divTitulo.innerText = "Pesadilla en el Restaurante"
mainContendor.appendChild(divTitulo)

const divSeleccionArea = document.createElement("div")
mainContendor.appendChild(divSeleccionArea)

const colSalon = document.createElement("div");
divSeleccionArea.appendChild(colSalon)

const colCocina = document.createElement("div");
divSeleccionArea.appendChild(colCocina)

const imgSalon = document.createElement("img");
imgSalon.src = "./assets/Salon.png";
imgSalon.alt = "Salón";
imgSalon.title = "Salón";
colSalon.appendChild(imgSalon);

const imgCocina = document.createElement("img");
imgCocina.src = "./assets/Cocina.png";
imgCocina.alt = "cocina";
imgCocina.title = "Cocina";
colCocina.appendChild(imgCocina);

// Estilos
mainContendor.className = "container d-flex flex-column justify-content-center align-items-center vh-100";
divTitulo.className = "col-8 p-3 text-center fw-bold text-decoration-underline display-3 titulo"
divSeleccionArea.className = "row w-100 justify-content-center "
colSalon.className = "col-6 d-flex justify-content-center p-5"
colCocina.className = "col-6 d-flex justify-content-center p-5"
imgSalon.className = "img-fluid imagen-boton m-3 border rounded shadow boton"; 
imgSalon.style.maxWidth = "75%";
imgCocina.className = "img-fluid imagen-boton m-3 border rounded shadow boton"; 
imgCocina.style.maxWidth = "75%";

// Excusas de cada parte

imgSalon.onclick = () => mostrarEscenasSalon()
imgCocina.onclick = () => mostrarEscenasCocina()

function mostrarEscenasSalon() {

  //Generacion de las Excusas
  let quien = ['Un crítico gastronómico', 'Una despedida de soltero', 'El pianista', 'Un influencer sin dinero'];
  let accion = ['derramó vino tinto sobre', 'insultó gravemente a', 'montó un espectáculo con', 'se negó a pagar'];
  let que = ['la cubertería de plata', 'el vestido de la novia', 'la tarta de bodas', 'la cuenta de la mesa 5'];
  let cuando = ['mientras servía el café', 'en mitad del brindis', 'justo antes de la propina', 'cuando traía el postre'];

  let randomQuien = quien[Math.floor(Math.random() * quien.length)]
  let randomAccion = accion[Math.floor(Math.random() * accion.length)]
  let randomQue = que[Math.floor(Math.random() * que.length)]
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)]

  let excusa = `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`

  let preguntas = [
    "¡DRAMA EN LAS MESAS! ¿Qué pasó con los comensales?",
    "¡SERVICIO! ¿Por qué el crítico gastronómico está gritando?",
    "¡ATENCIÓN! ¿Qué excusa le damos ahora a la mesa 5?",
    "¡CUIDADO! ¿Por qué hay vino derramado por todos lados?"
    ]
  let randomPregunta = preguntas[Math.floor(Math.random() * preguntas.length)] 
  let preguntaExcusa = randomPregunta

// Construccion del HTML
  divSeleccionArea.remove()  

  const divPregunta = document.createElement("div")
  divPregunta.innerHTML = preguntaExcusa;
  mainContendor.appendChild(divPregunta)

  const divExcusa = document.createElement("div")
  divExcusa.id = "excusa"
  divExcusa.innerHTML = excusa
  mainContendor.appendChild(divExcusa)

  const botonRestart = document.createElement("button")
  botonRestart.innerText = "Nueva Excusa"
  botonRestart.onclick = () => location.reload();
  mainContendor.appendChild(botonRestart);

  divPregunta.className = "col-8 p-5 text-center m-3 texto display-5 fadeInAnimation"
  divExcusa.className = "col-8 p-5 text-center m-3 display-5 texto fadeInAnimation"
  botonRestart.className = "btn btn-outline-secondary m-1";
}

function mostrarEscenasCocina() {

  //Generacion de las Excusas
  let quien = ['El jefe de cocina', 'Un inspector de sanidad', 'El pinche novato', 'Una rata con sombrero'];
  let accion = ['flambeó por error', 'encontró un pelo en', 'tiró al suelo', 'confundió la sal con'];
  let que = ['el soufflé de queso', 'la freidora industrial', 'el pedido de bogavantes', 'el postre estrella'];
  let cuando = ['durante el cambio de turno', 'en hora punta', 'mientras se quemaba la salsa', 'antes de emplatar'];

  let randomQuien = quien[Math.floor(Math.random() * quien.length)]
  let randomAccion = accion[Math.floor(Math.random() * accion.length)]
  let randomQue = que[Math.floor(Math.random() * que.length)]
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)]

  let excusa = `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`

  let preguntas = [
    "¡OÍDO COCINA! ¿Por qué no ha salido el pedido?",
    "¡PESADILLA EN LOS FOGONES! ¿Qué has roto ahora?",
    "¡FUEGO! ¿A qué se debe este desastre en la línea?",
    "¡CHEF! ¿Por qué el plato estrella regresó a la cocina?"
    ]
  let randomPregunta = preguntas[Math.floor(Math.random() * preguntas.length)] 
  let preguntaExcusa = randomPregunta

// Construccion del HTML
  divSeleccionArea.remove()  

  const divPregunta = document.createElement("div")
  divPregunta.innerHTML = preguntaExcusa;
  mainContendor.appendChild(divPregunta)

  const divExcusa = document.createElement("div")
  divExcusa.id = "excusa"
  divExcusa.innerHTML = excusa
  mainContendor.appendChild(divExcusa)

  const botonRestart = document.createElement("button")
  botonRestart.innerText = "Nueva Excusa"
  botonRestart.onclick = () => location.reload();
  mainContendor.appendChild(botonRestart);

  divPregunta.className = "col-8 p-5 text-center m-3 texto display-5 fadeInAnimation"
  divExcusa.className = "col-8 p-5 text-center m-3 display-5 texto fadeInAnimation"
  botonRestart.className = "btn btn-outline-secondary m-1";
}

};
