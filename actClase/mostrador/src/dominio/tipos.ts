export interface Libro {
    id: String,
    titulo: string,
    autor: string,
    anio: number,
    ejemplares: number
}

export type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';

 export interface Prestamo {
    readonly folio: string,
    readonly libroId: string,
    readonly socio: string,
    readonly venceEn: Date,
    devueltoEn?: Date
 }

// const estado; EstadoPrestamo = 'activo';



 export class LibroNoEncontradoError extends Error{};
 export class SinEjemplaresError extends Error{};
