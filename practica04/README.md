1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?
-- tendriamos que envolver el codigo de cada ruta en un try catch, nos veriamos obligados a recibir el error y pasarlo manualmente. Si lo hicieramos asi la promeza rechazada se perderia y el cliente no recibiria ninguna respuesta.

2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
-- por la separacion de responsabilidades, la capa negocio no debe de saber que ecxiste HTTP o express, su unico trabajo es aplicar las reglas de negocio (una biblioteca en este caso).

3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?
-- creo que ninguno porque este es el beneficio de esta arquitectura usando API REST, ya que todo lo mandamos en JSON a traves del protocolo HTTP es universal, es indiferente si hacemos la peticion GET o POST desde un celular, una computadora, etc.
