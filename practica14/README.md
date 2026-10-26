
## Preguntas y eespuestas Practica 14

1. ¿Por qué en la pestaña Red (Network) del navegador salen dos peticiones al cargar la página?
- Esto ocurre porque la aplicación se está ejecutando bajo modo estricto de React en el entorno de desarrollo. Durante el montaje inicial, React monta el componente, lo desmonta inmediatamente y lo vuelve a montar a propósito para detectar posibles efectos secundarios o fugas de memoria, lo que provoca que el hook de efecto (useEffect) se ejecute dos veces y dispare dos solicitudes HTTP idénticas. Esto es un comportamiento normal exclusivo del modo de desarrollo y no ocurre en producción.

2. ¿Qué pasa si quitas el arreglo de dependencias del efecto useEffect Muéstralo en la pestaña Red.
- Si se omite por completo el arreglo de dependencias, el efecto se ejecutará en cada renderizado del componente. Como el hook actualiza el estado de la aplicación al recibir los datos, ese cambio de estado provoca un nuevo renderizado, que a su vez vuelve a disparar el efecto infinitamente, generando un bucle de peticiones HTTP incontrolables que saturará la pestaña red y congelará el navegador.

3. ¿Qué hace e.preventDefault() en el formulario y qué pasa si lo quitas?
- Cancela el comportamiento nativo por defecto que tienen los formularios HTML al enviar el "submit", el cual recarga la página completa del navegador y limpiar el estado de la aplicación.
- Si lo quitamos, el navegador recargará la página de forma forzosa al hacer clic en pagar, borrando el estado del carrito, perdiendo los datos ingresados y provocando que la petición asíncrona hacia la API se interrumpa antes de recibir la respuesta.


- Wilber Valdez Quintero