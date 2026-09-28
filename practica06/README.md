## 1.- ¿Por qué la interfaz MiembroRepository no menciona Express, NestJS ni memoria?
- Porque pertenece a la capa de dominio y el dominio debe mantenerse listo para recibir cualquier framework.

## 2.- ¿Qué palabra de la clase MiembroMemoriaRepository es la que promete cumplir la interfaz del paso anterior?
- implements (implements MiembroRepository).


## 3.- ¿Por qué el archivo miembros.service.ts no sabe qué es una petición HTTP?
- Porque el Servicio se encarga de la lógica de negocio no de la capa de envios. No maneja objetos req, res, cabeceras HTTP ni códigos de estado.

## 4.- ¿Por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?
- El controlador depende de una clase especifica, la cual existe en tiempo de ejecución. El repositorio en el servicio se inyecta usando una interfaz, la cual es borrada por TypeScript al transpilar a JavaScript, haciendo indispensable el uso de un token oara que NestJS sepa que entregar.

## 5.- ¿Qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?
- Que es un sistema que permite la incorporacion de diferentes modulos sin tener que hacer cambios en la arquitectura, y tambien que al ejecutar las peticiones HTTP de Inscripciones todas siguen respondiendo con los mismos codigos de estado sin alterar el funcionamiento.


Wilber Valdez Quintero