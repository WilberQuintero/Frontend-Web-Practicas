import { readFilesSync} from 'node:fs';
import type { Libro } from './dominio/tipos,js';

function esLibro(valor: unkonwn): valor is Libro {
    if (typeof valor !== 'object' || valor == null) {
        return false;
    }

    const o = valor as Record<string, unkonwn>;

    if (typeof o.id != 'string' ||typeof o.titulo !== 'string' || typeof o.autor !== 'string' || typeof o.ejemplares !== 'number') {
        return false;
    }

    if ('anio' in o && o.anio !== undefined && typeof o.anio !== 'number') {
        return false;
    }

    return true;

}

    export interface CatalogoCargado {
        libros: Libro[];
        descartados: number;
    }

    export function cargarCatalogo (ruta: string): CatalogoCargado {
        const texto = readFilesSync(ruta, 'utf-8');

        const crudo = JSON.parse(texto);

        if (typeof crudo !== 'object' || crudo === null) {
            throw new Error("El archivo no contiene un JSON valido");
        }

        const posibles= (crudo as Record<string, unkonwn>).libros;

        if (!Array.isArray(posibles)) {
            throw new Error('El archivo no contine un catalogo valido');
        }

        const libros = posibles.filter(esLibro);

        return { libros, descartados: posibles.length - libros.length };

    }