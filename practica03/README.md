1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?
-- No hizo falta porque el patrón repository esta actuando como un escudo que aisla las reglas de negocio. Su proposito principal es definir un contrato claro y por eso podemos validar la logica usando unas estructuras de memoria simples sin necesidad de prender servidores ni nada externo.

2. El Service recibe el repositorio como Repository, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?
-- Si el servicio estuviera amarrado a obligaria al sistema a depender siempre de la memoria volatil, y al depender solamente de la interfaz Repository<Prestamo> el servicio ignora el mecanismo de persistencia.

3. Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?
-- Solamente algunos pocos porque creariamos una nueva clase que implementara la logica de PostgreSQL o la bd que usaramos, y cambiariamos la instancia que se la pasa al servicio en la clase main.ts, el cambio seria minimo porque la arquitectura esta lista para implementar base de datos.
