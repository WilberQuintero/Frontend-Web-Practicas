// servicios/gimnasio.ts — las llamadas a la API, tipadas.
// Los componentes sólo ven estas funciones, nunca a Axios.
import { api, type Sobre } from './api.ts';
import type { Clase, ClaseConHorarios } from '../tipos.ts';

// GET /clases
export async function traerClases(): Promise<Clase[]> {
  const respuesta = await api.get<Sobre<Clase[]>>('/clases');
  return respuesta.data.data; // .data de Axios, y .data del sobre
}

// GET /clases/:id → la clase con sus horarios
export async function traerClase(id: number): Promise<ClaseConHorarios> {
  const respuesta = await api.get<Sobre<ClaseConHorarios>>(`/clases/${id}`);
  return respuesta.data.data;
}

export async function inscribirse(id: number): Promise<void> {
  await api.post('inscripciones', { id });
}

export async function traerMisInscripciones(): Promise<ClaseConHorarios[]> {
  const respuesta = await api.get<Sobre<ClaseConHorarios[]>>('/inscripciones/mias');
  return respuesta.data.data;
}
