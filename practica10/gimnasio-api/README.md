# Práctica 10 — Blindar la API, JWT y OpenAPI

### 1. ¿Por qué el filtro atrapa la clase base y no cada error por separado?
- Porque al registrar el filtro decorado con la clase base abstracta este va interceptar automáticamente a cualquier error que herede de ella. Si se hiciera por separado, tendríamos que repetir el mismo código de mapeo y respuesta para cada error nuevo.

### 2. ¿Por qué este middleware no podría decidir si un usuario tiene un rol o permiso para una ruta?
- Porque un middleware en NestJS se ejecuta antes de que el enrutador de NestJS sepa qué controlador o método específico va a atender la petición. No tiene acceso al contexto de ejecución ni a los metadatos del controlador.

### 3. ¿Por qué la petición que responde 409 no aparece en el registro del Logging Interceptor?
- Porque el interceptor utiliza el operador "tap()" sobre el observable de la respuesta, este operador solo se ejecuta cuando la petición fluye de forma exitosa. Cuando ocurre un error el flujo se interrumpe y se desvía directamente hacia el Filtro de exepciones.

### 4. ¿Por qué este cambio rompe a cualquier cliente que ya estuviera usando la API?
- Porque modifica drásticamente el contrato de la API. Los clientes que esperaban recibir directamente un arreglo o un objeto plano, ahora reciben un contenedor estructurado con las propiedades  "data, meta".

### 5. Si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege CORS?
- El bloqueo lo realiza exclusivamente el navegador web del usuari. CORS protege al usuario final, impidiendo que sitios web maliciosos de otros dominios lean información confidencial robada.

### 6. ¿Por qué los dos errores del inicio de sesión (`AuthService`) dicen exactamente lo mismo ("Credenciales inválidas")?
Por motivos de seguridad y privacidad. Si el sistema especificara si el correo no existe o si la contraseña es incorrecta, un atacante podría probar correos masivamente para descubrir qué cuentas están registradas en el gimnasio.

### 7. ¿Por qué el campo se llama `passwordHash` y no `password`?
- Es una medida de seguridad para prevenir errores humanos o vulnerabilidades por descuido. Al llamarse explícitamente passwordHash, el codigo deja en evidencia que lo que se almacena es el resultado cifrado con una función de hashing, haciendo imposible confundirlo con la contraseña en texto plano.

### 8. Si el contenido del token se puede leer en jwt.io, ¿qué es lo que protege la firma?
- La firma criptográfica protege la integridad y la autenticidad del token. Aunque cualquiera puede leer el payload, nadie puede modificar su contenido. Si alguien intenta alterarlo, la firma matemática dejará de coincidir con el secreto del servidor, y el backend rechazará el token de inmediato.

### 9. ¿Por qué es más seguro proteger todo por omisión y abrir a mano (`@Publico()`), que al revés?
- Porque sigue el principio de seguridad por diseño. Si se protege por omisión, el peor descuido del desarrollador al crear una nueva ruta es dejarla protegida. En cambio, si se deja todo abierto por omisión y se protege a mano, un descuido deja un endpoint sensible completamente expuesto sin que nadie lo note.

### 10. ¿Cuál es la diferencia entre un código 401 y un código 403?
- 401 Unauthorized Significa que el usuario no está autenticado.
- 403 Forbidden Significa que el usuario sí está, pero no tiene los privilegios o permisos necesarios para realizar esa acción específica.

### 11. ¿Cuántas líneas del `AuthService` tuvieron que cambiar para pasar de memoria a MySQL?
- 0 líneas, La lógica de negocio del servicio no cambió en absoluto. Esto ocurre gracias al patrón Repository y la Inyección de Dependencias, donde el servicio interactúa únicamente con la interfaz, ignorando por completo si los datos se guardan en un arreglo RAM o en una base de datos relacional mediante Prisma.

### 12. ¿Por qué es importante tomar al usuario de los claims del token y no de un parámetro de la URL o del cuerpo?
- Porque los parámetros de la URL /miembros/:id/ o del cuerpo pueden ser manipulados maliciosamente por cualquier usuario desde herramientas como Postman o inspeccionando el cliente web para suplantar identidades. En cambio, los claims del token provienen de un payload firmado criptográficamente por el servidor al momento del login, asegurando que la identidad del usuario es inalterable y verídica.

Wilber Valdez Quintero