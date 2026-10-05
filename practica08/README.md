# Práctica 8 — Prisma: esquema y migraciones

### 1. ¿Por qué el paquete del adaptador se llama @prisma/adapter-mariadb si usamos MySQL?
- Porque el paquete se llama como el driver de npm que envuelve no directamente como la base de datos. MariaDB y MySQL comparten el mismo protocolo de red, por lo que @prisma/adapter-mariadb es el adaptador oficial utilizado para conectarse a bases de datos MySQL 8.

### 2. ¿Editar schema.prisma cambió algo en la base de datos antes de migrar?
- No. schema.prisma es únicamente una declaración de intención en texto. La base de datos no sufre ningún cambio hasta que ejecutamos el comando npx prisma migrate dev, el cual traduce el esquema a sentencias SQL e impacta la base de datos.

### 3. ¿La carpeta de migraciones es una foto del esquema o un historial?
- Es un historial. Cada subcarpeta en prisma/migrations/ representa un paso en el tiempo con su respectivo archivo migration.sql. La foto actual del esquema es schema.prisma.

### 4. ¿Por qué Horario.clase sí crea columna y Clase.horarios`no?
- Porque Horario.clase es el lado que lleva la anotación, declarando la columna de la llave foránea (claseId) en la tabla horarios. Y clase.horarios es un campo virtual de TypeScript que prisma proporciona para facilitar consultas inversas.

### 5. ¿De dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?
- Este surge automáticamente porque la entidad inscripcion actúa como una tabla intermedia que posee dos relaciones uno a muchos una hacia horario y otra hacia miembro.


Wilber Valdez Quintero