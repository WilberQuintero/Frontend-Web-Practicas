import './boton-app';
import './tarjeta-producto';
import type { Producto } from './tipos';

const rejilla = document.querySelector<HTMLElement>('#rejilla')!;
const cuenta = document.querySelector<HTMLElement>('#cuenta')!;
const vaciar = document.querySelector<HTMLElement>('#vaciar')!;
let enCarrito = 0;

// Lista de productos del catálogo (Recurso 8)
const productos: Producto[] = [
  { id: '1', nombre: 'Tenis para correr Vento', precio: 1299, imagen: '/img/producto-01.jpg', existencia: 5 },
  { id: '2', nombre: 'Playera térmica compresiva', precio: 499, imagen: '/img/producto-02.jpg', existencia: 8 },
  { id: '3', nombre: 'Short de entrenamiento', precio: 399, imagen: '/img/producto-03.jpg', existencia: 0 },
  { id: '4', nombre: 'Mat de yoga antideslizante', precio: 699, imagen: '/img/producto-04.jpg', existencia: 4 },
  { id: '5', nombre: 'Mancuernas ajustables (par)', precio: 1899, imagen: '/img/producto-05.jpg', existencia: 2 },
  { id: '6', nombre: 'Botella deportiva acero', precio: 349, imagen: '/img/producto-06.jpg', existencia: 10 },
  { id: '7', nombre: 'Guantes para gimnasio', precio: 299, imagen: '/img/producto-07.jpg', existencia: 6 },
  { id: '8', nombre: 'Soga para saltar profesional', precio: 219, imagen: '/img/producto-08.jpg', existencia: 7 },
  { id: '9', nombre: 'Mochila deportiva impermeable', precio: 999, imagen: '/img/producto-09.jpg', existencia: 3 },
  { id: '10', nombre: 'Licra larga deportiva', precio: 599, imagen: '/img/producto-10.jpg', existencia: 0 },
  { id: '11', nombre: 'Chamarra corta vientos', precio: 1499, imagen: '/img/producto-11.jpg', existencia: 1 },
  { id: '12', nombre: 'Bandas de resistencia (set)', precio: 449, imagen: '/img/producto-12.jpg', existencia: 12 }
];

// Generar las tarjetas dinámicamente y agregarlas a la rejilla
for (const p of productos) {
  const tarjeta = document.createElement('tarjeta-producto');
  tarjeta.setAttribute('producto-id', p.id);
  tarjeta.setAttribute('nombre', p.nombre);
  tarjeta.setAttribute('precio', String(p.precio));
  tarjeta.setAttribute('imagen', p.imagen);
  tarjeta.setAttribute('existencia', String(p.existencia));
  rejilla.append(tarjeta);
}

// Un solo event listener en la rejilla para escuchar el evento personalizado "agregar"
rejilla.addEventListener('agregar', ((e: CustomEvent) => {
  enCarrito++;
  cuenta.textContent = String(enCarrito);
  console.log('Agregado:', e.detail.nombre, e.detail.precio);
}) as EventListener);

// Botón para vaciar el carrito
vaciar.addEventListener('click', () => {
  enCarrito = 0;
  cuenta.textContent = '0';
});

cuenta.textContent = '0';