# Práctica 19


1. ¿Qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?

- main.ts: Hace la función de main.tsx, es el punto de entrada principal de la aplicación donde se arranca e inicializa el componente raíz utilizando la función bootstrapApplication.

- app.ts: Hace la función de App.tsx, funcionando como el componente raíz principal que contiene la lógica, la estructura de la interfaz y los estilos base.

- angular.json: Hace la función de vite.config.ts, ya que es el archivo central de configuración del proyecto donde se definen las opciones de compilación, rutas de estilos,servidores y empaquetado.

2. ¿Por qué clase() lleva paréntesis y para qué sirve track?

- Porque al definir la propiedad de entrada con la función input.required(), Angular crea un Signal. Para leer o suscribirse al valor actual almacenado dentro de la señal en la plantilla o en el código, es obligatorio invocarla con paréntesis.

- La expresión track dentro del bloque @for es obligatoria en Angular y sirve para asignarle un identificador único a cada elemento de la lista iterada. Esto permite que Angular rastree exactamente qué elementos cambiaron, se agregaron o se eliminaron en el arreglo.


Wilber Valdez Quintero.