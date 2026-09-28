import { MiembroRepository } from '../dominio/miembro.repository';
import { Miembro } from '../dominio/entidades';

export class MiembroMemoriaRepository implements MiembroRepository {
  private miembros: Miembro[] = [
    { id: 1, nombre: 'Ana López', correo: 'ana@gmail.com', membresia: 'VIP', activo: true },
    { id: 2, nombre: 'Carlos Ruiz', correo: 'carlos@gmail.com', membresia: 'Estándar', activo: true },
    { id: 3, nombre: 'Sofía Gómez', correo: 'sofia@gmail.com', membresia: 'VIP', activo: true },
  ];
  private siguienteId = 4;

  async listar(): Promise<Miembro[]> {
    return this.miembros;
  }

  async buscarPorId(id: number): Promise<Miembro | null> {
    return this.miembros.find((m) => m.id === id) || null;
  }

  async crear(datos: Omit<Miembro, 'id' | 'activo'>): Promise<Miembro> {
    const nuevo: Miembro = {
      id: this.siguienteId++,
      ...datos,
      activo: true,
    };
    this.miembros.push(nuevo);
    return nuevo;
  }

  async actualizar(id: number, datos: Partial<Omit<Miembro, 'id'>>): Promise<Miembro | null> {
    const miembro = await this.buscarPorId(id);
    if (!miembro) return null;
    Object.assign(miembro, datos);
    return miembro;
  }

  async eliminar(id: number): Promise<boolean> {
    const index = this.miembros.findIndex((m) => m.id === id);
    if (index === -1) return false;
    this.miembros.splice(index, 1);
    return true;
  }
}