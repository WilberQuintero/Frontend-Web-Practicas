import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { CrearMiembroDto } from './dto/crear-miembro.dto';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto';

@Controller('miembros')
export class MiembrosController {
  constructor(private readonly servicio: MiembrosService) {}

  @Get()
  async listar() {
    return this.servicio.listar();
  }

  @Get(':id')
  async buscar(@Param('id') id: string) {
    const miembro = await this.servicio.buscar(Number(id));
    if (!miembro) {
      throw new NotFoundException(`No existe el miembro con id ${id}`);
    }
    return miembro;
  }

  @Post()
  async crear(@Body() dto: CrearMiembroDto) {
    return this.servicio.crear(dto);
  }

  @Patch(':id')
  async actualizar(@Param('id') id: string, @Body() dto: ActualizarMiembroDto) {
    const actualizado = await this.servicio.actualizar(Number(id), dto);
    if (!actualizado) {
      throw new NotFoundException(`No existe el miembro con id ${id}`);
    }
    return actualizado;
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    const eliminado = await this.servicio.eliminar(Number(id));
    if (!eliminado) {
      throw new NotFoundException(`No existe el miembro con id ${id}`);
    }
    return { mensaje: 'Miembro eliminado correctamente' };
  }
}