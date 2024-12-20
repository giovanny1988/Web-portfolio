//Logica del boton de navegación
const btnNav = document.getElementById("btnNav");
window.onscroll = () => {
  window.scrollY > 900
    ? btnNav.removeAttribute("hidden")
    : btnNav.setAttribute("hidden", "");
};

//Libreria Scroll Reveal js
const sr = ScrollReveal();

sr.reveal(".container", {
  distance: "100px",
  origin: "left",
  duration: 2000,
});

sr.reveal(".contac-text", {
  distance: "100px",
  origin: "left",
  duration: 2000,
});

//Funcion para contar caracteres en el Text Area
const textArea = document.getElementById("textArea");
const countDiv = document.getElementById("count-letters");
let contador = 0;

textArea.addEventListener("keydown", (k) => {
  if (k.key === "Backspace") {
    contador--;
    if (textArea.value.length === 0) {
      contador = 0;
    }
  } else if (textArea.value.length === 250) {
    contador = 250;
  } else {
    contador++;
  }
  countDiv.innerHTML = `${contador}/250`;
});
