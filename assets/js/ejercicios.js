const saludo = document.getElementById("saludo");
export function name(e) {
  e.preventDefault();
  const nombre = e.target.nameSaludo.value;
  saludo.textContent = `¡Hola, ${nombre}!`;
}
export function cambiarBody() {
  const background = document.body;
  if (
    background.style.backgroundColor === "white" ||
    background.style.backgroundColor === ""
  ) {
    background.style.background = "black";
    background.style.color = "white";
  } else if (
    background.style.backgroundColor === "black" ||
    background.style.backgroundColor === ""
  ) {
    background.style.background = "white";
    background.style.color = "black";
  }
}

const fahren = document.getElementById("fahren");
export function convertir(e){
    e.preventDefault();
    const conversion = (e.target.temp.value)*(9/5)+32;
    fahren.textContent=`${e.target.temp.value} grados Celsius, són ${conversion}  grados Fahrenheits.`;
}
const parrafos = document.getElementById("parrafos")
export function agregarP (){
    /* El document.createElement ("p"), lo que hace es crear un elemento de párrafo pero sin contenido alguno */
    const newP = document.createElement("p");
    /* En esta lína, le damos el valor a los párrafos */
    newP.textContent = "Acabas de añadir un párrafo nuevo.";
    /* El appendChild, envia los elementos creados, en este caso parrafo al padre, que es la section llamada parrafos. */
    parrafos.appendChild(newP);
}
const finalCont = document.getElementById("finalCont");
let contador =0;
export function añadir (){
    contador++
    finalCont.textContent = contador;
}
export function eliminar (){
contador--
    finalCont.textContent = contador;

}