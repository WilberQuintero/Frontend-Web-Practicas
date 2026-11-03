# Práctica 15: Rutas y Parámetros en React Router


1. ¿Por qué el componente 404 sí tiene encabezado y pie?
Porque la ruta de la pagina de error 404 está definida dentro de la jerarquía de rutas hijas del componente Layout compartido. Y al estar anidada bajo la estructura del layout hereda automáticamente el encabezado y el pie de página.

2. ¿Qué cambia en la pestaña Red (Network) si usas <a href> en lugar de <Link>?
Si usas un enlace HTML tradicional <a href> el navegador realiza una recarga completa de la página,lo que provoca que se vuelva a solicitar todo el documento HTML, CSS, scripts y recursos desde el servidor. En cambio al usar el componente <Link> de React Router, la navegación es del lado del cliente, se intercepta el clic, se actualiza la URL dinámicamente y solo se cargan los componentes necesarios sin recargar la página lo que hace que no genere mas peticiones.

3. ¿En qué tipo de dato llega el id obtenido de la URL mediante useParams(), y qué pasa si no lo conviertes?    
Llega estrictamente como un tipo de dato string. Si intentamos hacer operaciones numéricas con él la comparación fallará o producirá comportamientos inesperados, ya que  "1" (texto) nunca será estrictamente igual a "1" (número). Por eso, es necesario castearlo o convertirlo explícitamente a número (ej: usando Number(id) o parseInt(id)).

4. ¿Qué pasa al ir de /clases/1 a /clases/2 si el id no está incluido en las dependencias del efecto (useEffect)?
Si el id no se declara dentro del arreglo de dependencias del useEffect, el efecto no se volverá a ejecutar cuando cambie el parámetro de la URL y como resultado, la interfaz se quedará estancada mostrando los datos de la primera clase "/clases/1" y no pedirá ni actualizará la información de la nueva clase "/clases/2", manteniendo la vista desactualizada.


Wilber Valdez Quintero