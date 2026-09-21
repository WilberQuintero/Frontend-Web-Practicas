### 1. ¿Que generó el comando nest new?
Generó la estructura base y la arquitectura inicial de una aplicación NestJS lista para la produccion, incluyendo la estructura del codigo, las configuraciones de typescript, las dependencias, herramientas de testing.

### 2. ¿Qué hace el AppService que ya viene generado?
Contiene la lógica de negocio básica para el endpoint de raíz, exponiendo el método getHello() que retorna el texto "Hello World!". Su propósito principal es desacoplar la lógica de del controlador, permitiendo que sea inyectada y reutilizada mediante el sistema de inyección de dependencias de NestJS.

### 3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?
Porque AppController ya se encuentra registrado dentro del arreglo controllers de AppModule. En la arquitectura de NestJS, los modulos agrupan y registran controladores, una vez que un controlador está declarado en el módulo, Nest inspecciona automáticamente sus decoradores y los publica en el enrutador sin requerir configuración manual adicional por cada endpoint.

### 4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?
- El cuerpo llega como un objeto vacío.
- Se crea y agrega al arreglo un objeto con la forma { id: X, nombre: undefined }.
- El servidor responde exitosamente con un código HTTP 201 Created devolviendo este objeto incompleto en lugar de rechazarlo con un error.

### 5. ¿En qué archivo vive hoy toda la lógica de la práctica?
Vive en src/app.controller.ts, ya que en dicho archivo se definieron la interfaz de tipado Clase, el arreglo de almacenamiento en memoria clases y los métodos que atienden las peticiones para listar y crear elementos.

Wilber Valdez Quintero