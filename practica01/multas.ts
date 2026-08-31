type EstadoPrestamo = 'activo' | 'devuelto' | 'vencido';

interface Prestamo {
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    nombre?: string;
}

function armarRecibo(prestamo: Prestamo): string {
    const cargoFijo = 50;
    const total = prestamo.multa + cargoFijo;
    const cliente = prestamo.nombre ? prestamo.nombre : 'Wilber Quintero';
    return `Recibo para: ${cliente}. Estado: ${prestamo.estado}. Total a pagar: $${total}`;
}

const prestamo: Prestamo = { multa: 350, ejemplar: 14, estado: 'vencido' };
console.log(armarRecibo(prestamo));