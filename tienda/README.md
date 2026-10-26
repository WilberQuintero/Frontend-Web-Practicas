# Práctica 13 Tienda en línea con React

### 1. ¿Por qué el componente Layout no necesita saber que es una tienda?
- Porque el Layout actúa como un contenedor genérico o de diseño que se basa en el patrón de composición utilizando children. Su responsabilidad es estructurar el esqueleto visual de la página, ignorando por completo qué elementos o lógica de negocio se renderizan dentro de él.

### 2. ¿Qué pasa si escribes onClick={onAgregar(producto)} sin la función flecha?
- Se genera un bucle infinito de renderizado y la aplicación se pararia inmediatamente con un error de desbordamiento. Esto ocurre porque al poner los paréntesis (), la función se ejecuta de forma inmediata cada vez que React lee y pinta el componente durante el renderizado, en lugar de esperar a que el usuario haga clic sobre el botón. 
La forma correcta de pasar una función flecha como referencia es: onClick={() => onAgregar(producto)}.

### 3. ¿Por qué al usar carrito.push(...) directamente el contador no se mueve y no sale ningún error?
- Porque push() muta el arreglo existente de manera directa en memoria. Si modificas el arreglo original sin crear una copia o un nuevo arreglo, React asume que el estado no ha cambiado y no dispara el re renderizado de la interfaz y el contador no se actualiza. Para solucionarlo, siempre se deben usar métodos inmutables o crear un nuevo arreglo.


Wilber Valdez Quintero