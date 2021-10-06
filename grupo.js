
export default class Grupo{
    constructor(){
        this._inicio = null;
    }

    agregar(nuevo){
        if (this._inicio==null){
            this._inicio=nuevo;
        } else {
            let per=this._inicio;
            while(per._next!=null)
                per=per._next;
            per._next=nuevo;
        }
        
    }

    listar(){
        let per = this._inicio;
        let listado = per.getPersona();
        while(per._next!=null){
            per=per._next;
            listado = listado + per.getPersona();
        }
        return listado;
    }
}