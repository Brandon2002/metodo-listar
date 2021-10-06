export default class Persona{
    constructor(nombre, PApellido, SApellido, edad){
        this._nombre = nombre;
        this._PApellido = PApellido;
        this._SApellido = SApellido;
        this._edad = edad;
        this._next = null;
    }

    getPersona(){
        return `Este alumno es ${this._nombre} ${this._PApellido} ${this._SApellido}, su edad es ${this._edad} y su siguiente es ${this._next}`
    }
}