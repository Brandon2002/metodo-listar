import Persona from './persona.js'
import Grupo from './grupo.js'

let p1 = new Persona('Brandon', 'Tapia', 'Hernández', 19);
let p2 = new Persona('Victor', 'Álvarez', 'Peña', 21);
let p3 = new Persona('Diego', 'Gentner', 'Polanco', 19);
let g1 = new Grupo();


g1.agregar(p1);
g1.agregar(p2);
g1.agregar(p3);
console.log(g1.listar());
