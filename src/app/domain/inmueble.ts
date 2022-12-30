export interface Inmueble {
    fraccionamiento?: {
        colonia?: string;
        servGenerales?: string;
        imgRuta?: string;
        imgExterior?: string;
        calle?: string;
        ciudad?: string;
        descripcion?: string;
        nombre?: string;
        cp?: string;
        clvFraccionamiento?: number;
        imgDistribucion?: string;
        servVigilancia?: boolean;
        estado?: string
    };
    numeroCasa?: string;
    imgInterior?: string;
    medidasCons?: string;
    clvInmueble?: number;
    tipo?: string;
    nombreCasa?: string;
    imgFachada?: string;
    disponibilidad?: string;
    descripcionCasa?: string;
    precio?: number;
}