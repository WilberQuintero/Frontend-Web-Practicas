## .-1 ¿Qué pasaría si el módulo no quedara registrado en la raíz (AppModule)?
- NestJS no reconocería sus controladores ni sus servicios. Y las rutas expuestas por ese módulo no estarían disponibles (devolverían 404) y sus dependencias no podrían ser inyectadas en otras partes.

## .-2 ¿Por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?
- Porque la interfaz del repositorio está diseñada con abstracción de asincronía y eso permite que pueda acoplarse al principo de dependencias, si en el futuro se cambia la implementación en memoria por una base de datos real, la firma de los métodos ya será asíncrona osea que no habra que modificar nada.

## .-3 ¿Qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?
- Aparece un error de inyección de dependencias en tiempo de ejecución "Nest can't resolve dependencies of the InscripcionesService...". Las clases en TypeScript existen tanto en tiempo de compilación como de ejecución, por lo que NestJS puede usarlas directamente como token en su contenedor. Y las interfaces son eliminadas en la transpilación a Javascript, por lo que NestJS no tiene ninguna referencia en runtime para saber qué instanciar.

## .-4 ¿Por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
- El servicio depende de una interfaz "InscripcionRepository", la cual no existe en el runtime de JavaScript, obligando a NestJS a usar un token explícito "@Inject(INSCRIPCION_REPOSITORY)". Y el controlador depende directamente de una clase concreta "InscripcionesService", la cual si existe en JavaScript como función constructora en runtime, permitiendo que NestJS la resuelva automáticamente por su tipo.

## .-5 ¿Cuál es la diferencia entre un 400 y un 409?
- 400 Bad Request: Indica que la sintaxis o estructura de la petición es incorrecta o le faltan campos obligatorios.

409 Conflict: Indica que la petición está bien estructurada y entendible, pero no se puede procesar porque viola el estado o las reglas de negocio del sistema, por ejemplo, cupo lleno o intento de inscripción duplicada.

## .-6 ¿Por qué cambió el código de estado de esa última petición?
- Porque al cancelar la inscripción, el cupo disponible o el estado del miembro volvió a cumplir las condiciones de negocio. Por lo tanto, la petición que antes chocaba con el estado del sistema "09 Conflict" pasa a ser válida y crea la inscripción exitosamente "201 Created".

Wilber Valdez Quintero