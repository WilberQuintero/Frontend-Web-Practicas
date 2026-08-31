#Respuestas a la Práctica 1

1. ¿Hubo algún error o advertencia en la consola? 
R= No, JavaScript no mostró ningun error ni advertencia en la consola, ya que al intentar sumar un texto ('350') y un numero solo los une, no los suma.


2. Si el archivo tiene un error de tipos, ¿por qué node lo ejecuta?
R= Lo que hace es eliminar las anotaciones de typescript en memoria para convertir el código en JavaScript puro antes de correrlo
3. ¿Cuál comando revisa y cuál ejecuta?
R= El comando que revisa el código en busca de errores de tipos es "npx tsc --noEmit". Y el comando que ejecuta el codigo es "node multas.ts".

4. De las dos líneas que usan const, ¿por qué sólo una falla?
R= Falla la línea que intenta reasignar la variable por completo porque const bloquea la reasignación que hace la referencia en memoria
5. Al asignarle un texto a la variable con let, ¿de dónde salió ese tipo?
R= Al darle un valor numérico inicial a la variable, typescript asume automáticamente que esa variable será de tipo number para siempre, aunque el tipo no se haya declarado en el código.

**Errores finales provocados:**
* 1.- Línea a agregar: const prestamoError: Prestamo = { multa: 100, ejemplar: 1, estado: 'prestado' };
- Clave TS: TS2322
- Qué esperaba?: El tipo 'activo' | 'devuelto' | 'vencido'.
- Qué recibió?: El tipo string 'prestado'.

* 2.- Línea a agregar: console.log(prestamo.fecha);
- Clave TS: TS2339
- Qué esperaba?: Una propiedad válida definida dentro de la interfaz Prestamo.
- Qué recibió?: La propiedad fecha, la cual no existe en el tipo Prestamo.

* 3.- Línea a agregar: armarRecibo("Mi prestamo");
- Clave TS: TS2345
- Qué esperaba?: Un argumento de tipo Prestamo (un objeto con multa, ejemplar y estado).
- Qué recibió?: Un argumento de tipo strin