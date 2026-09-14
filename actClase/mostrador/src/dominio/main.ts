import { cargarCatalogo } from './catalogo.js';
import { pedirOpcion, pedirTexto } from './entrada.js';
import { disponiblesDe, estadoDe, multaDe, prestar, type Mostrador } from './dominio/prestamos.js';
import { LibroNoEncontradoError, SinEjemplaresError } from './dominio/tipos.js';

const OPCIONES = [
    { valor: 'prestar', etiqueta: 'prestar un libro'},
 { valor: 'catalogo', etiqueta: 'ver catalogo'},
    { valor: 'prestamos', etiqueta: 'ver prestamos'},
        { valor: 'salir', etiqueta: 'salir'},
] as const;

type Opcion = (typeof OPCIONES) [number] ['valor'];

function esOpcion(valor: string): valor is Opcion {
    return OPCIONES.some((o) => o.valor === valor);
}

const fecha = (d: Date) => d.toISOString().slice(0, 10);

function verCatalogo(m: Mostrador): void{
    console.log('Catalogo de libros:');

    for (const l of m.libros) {
        const disponibles = disponiblesDe(m,l);
        console.log('- ${l.titulo} (${l.autor}), ${l.anio ?? 's/a}) - ${l.disponibles} ejemplares disponibles');
    }

    console.log('');
}

function verPrestamos(m: Mostrador, hoy: Date): void {

}







async function main (): Promise<void> {
    const { libros, descartados } = cargarCatalogo('datos/catalogo.json');

    console.log('----MOSTRADOR BIBLIOTECA---');
    console.log('Se cargaron ${libros.length} libros del catalogo.');

    if (descartados > 0){
        console.log{'Se descartaron ${descartados} entradas invalidas del catalogo'};
    }   

    const hoy = new Date();

    const m: Mostrador = { libros, prestamos: [] };

    for (;;) {
        const elegido 
    }

}