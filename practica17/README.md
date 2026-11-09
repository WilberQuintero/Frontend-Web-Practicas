## Práctica 17

1.- ¿Qué es una ruta protegida Protected Route y cómo se implementa en una SPA con React Router?
- Una ruta protegida es aquella vista o componente de la aplicación cuyo acceso está condicionado a que el usuario cumpla con ciertos requisitos. Se implementa creando un componente wrapper que evalúa el estado global de la sesión, si el usuario está autenticado, renderiza el componente solicitado, y si no, lo redirige automáticamente a la vista de inicio de sesión.

2.- ¿Qué ocurre si un usuario no autenticado intenta acceder directamente a una ruta protegida escribiendo la URL en el navegador?
- El componente de protección intercepta la navegación antes de renderizar la vista, detecta que la sesión es nula o inválida, y ejecuta una redirección programática. Esto evita que se carguen datos sensibles o componentes privados de manera no autorizada.

3.- ¿Cómo se puede mejorar la experiencia de usuario (UX) al redirigir a un usuario no autenticado al login?
- Se puede pasar un estado de redirección al momento de redirigir al login, por ejemplo guardando la ruta a la que intentaba acceder. De esta forma, una vez que el usuario ingresa sus credenciales, la aplicación puede leer ese estado y devolverlo automáticamente.

4.- ¿Cuál es la ventaja de utilizar Guards o componentes contenedores en lugar de validar la sesión manualmente dentro de cada página?
- Le da una separación de responsabilidades y centraliza la lógica de seguridad. Si se validara dentro de cada página, se duplicaría código de verificación en múltiples archivos, lo que aumenta el riesgo de olvidar proteger alguna vista y complica el mantenimiento a futuro.

Wilber Valdez Quintero