# Práctica 9 — Blindar la API

### 1. ¿Qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
- Ninguna línea del Service ni del Controller tuvo que modificarse. gracias al principio de inversión de dependencias y al patrón tepository, únicamente se cambió el proveedor en el módulo de ClasesModule para sustituir el repositorio.

### 2. ¿Por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?
- Porque las reglas de negocio viven encapsuladas dentro del servicio de dominio. Al mantener intactas las interfaces de los repositorios, la capa de infraestructura se adaptó al dominio sin alterar la lógica de negocio ni las validaciones.

### 3. ¿Por qué una interfaz no puede validar nada en tiempo de ejecución?
- Porque las interfaces de TypeScript son de tipado estático que solo existe durante la compilación. Al transpilar el código a JavaScript las interfaces se eliminan completamente, por lo que no existen en tiempo de ejecución para realizar comprobaciones.

### 4. ¿Qué código de estado responde y qué trae en el cuerpo al activar el Pipe de Validación?
- Responde un código de estado 400 Bad Request. El cuerpo contiene un objeto JSON con la propiedad message, error y el código de estado statusCode: 400.

### 5. ¿Cuántas líneas quedó más corto el controlador al usar el Filtro de Excepciones?
- Quedó considerablemente más corto ya que se eliminaron todos los bloques de captura manual de errores try catch y las condicionales manuales que convertían errores de dominio a excepciones HTTP.

### 6. Si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege CORS?
- El bloqueo de CORS lo realiza exclusivamente el navegador web no el servidor. CORS protege al usuario impidiendo que un sitio web malicioso realice peticiones no autorizadas desde su navegador.

Wilber Valdez Quintero