//Añadimos la clave: valor al localStorage
localStorage.setItem("nombre", "Juan");
localStorage.setItem("SoyLaClave", "SoyElValor");
const nombre = localStorage.getItem("SoyLaClave");
localStorage.removeItem("SoyLaClave");

/**************************** */
/**ALMACENAMOS OBJETOS */

let usuario = {
  nombre: "Luis",
  edad: 60,
  ciudad: "Madrid",
};

//Almacenamos el valor en formato string
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperamos el valor en formato objeto
let usuarioLocalStorage = localStorage.getItem("usuario");
console.log(usuarioLocalStorage);

let usuarioJSON = JSON.parse(usuarioLocalStorage);
console.log(usuarioJSON);
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */
/********************************************** */

//********** */
//VARIABLES

const check = document.querySelector(".toggle");
const body = document.querySelector("body");

console.log(check);
console.log(body);

let oscuro = Boolean(window.localStorage.getItem("oscuro"));
console.log(oscuro);

// EVENTO
check.addEventListener("click", () => {
  console.log(check.checked);

  if (check.checked) {
    body.classList.add("change-color");
    window.localStorage.setItem("oscuro", true);
  } else {
    body.classList.remove("change-color");
    window.localStorage.removeItem("oscuro");
  }
});

const comprobarOscuro = (paramOscuro) => {
  if (paramOscuro) {
    body.classList.add("change-color");
    check.checked = true;
  } else {
    body.classList.remove("change-color");
    check.checked = false;
  }
};
comprobarOscuro(oscuro);
console.log(check.checked);
