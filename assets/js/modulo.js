import {name} from './ejercicios.js'
const userName=document.querySelector("#userName");
userName.addEventListener("submit", name)

import {cambiarBody} from './ejercicios.js'
const btn = document.getElementById("btnBody");
btn.addEventListener("click", cambiarBody);

import {convertir} from './ejercicios.js'
const grados = document.querySelector("#grados");
grados.addEventListener("submit", convertir);

import {agregarP} from './ejercicios.js';
const btnP = document.getElementById("btnP");
btnP.addEventListener("click", agregarP);

import {añadir, eliminar} from './ejercicios.js'
const up = document.getElementById("up");
const down = document.getElementById("down");
up.addEventListener("click", añadir);
down.addEventListener("click", eliminar);