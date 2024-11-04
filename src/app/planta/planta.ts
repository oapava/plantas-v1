export class Planta {
    altura_maxima: number;
    clima: string;
    id: number;
    nombre_cientifico: string;
    nombre_comun: string;
    sustrato_siembra: string;
    tipo: string;

    constructor(
        altura_maxima: number,
        clima: string,
        id: number,
        nombre_cientifico: string,
        nombre_comun: string,
        sustrato_siembra: string,
        tipo: string
    ){
        this.altura_maxima = altura_maxima ;
        this.clima =  clima;
        this.id =  id;
        this.nombre_cientifico =  nombre_cientifico;
        this.nombre_comun =  nombre_comun;
        this.sustrato_siembra =  sustrato_siembra;
        this.tipo =  tipo;
    }
}
