let sonidoBatman = document.querySelector(".bati_encendido");
let sonidoBoton = document.querySelector(".bati_click");

let batman = document.querySelector(".batman");
let batmanBoton = document.querySelector(".bati_boton");

let estadoLinterna = "apagado";
batmanBoton.addEventListener("click",controlarLinterna)

function controlarLinterna() {
  if (estadoLinterna == "apagado") {
    estadoLinterna = "encendido";
    sonidoLinterna();
    batman.classList.add("batman-activo");
  } else {
    estadoLinterna = "apagado";
    sonidoLinterna();
    batman.classList.remove("batman-activo");
  }
}
