# Práctica 12 Hola React


### 1. ¿En qué se convirtió cada etiqueta del JSX?
- Las etiquetas HTML en minúscula se convierten en strings literales de etiquetas DOM, mientras que los componentes personalizados en mayúscula se pasan como referencias a funciones o como objetos de componentes.

### 2. Si React es «sólo una biblioteca», ¿quién traduce el JSX?
- Lo traduce un compilador. El navegador web no entiende ni interpreta JSX, las herramientas de desarrollo toman el código JSX y lo transforman en JavaScript plano antes de que el navegador lo ejecute.

### 3. ¿Qué hace createRoot y qué hace render?
- createRoot: Es la función encargada de inicializar y crear un contenedor de React vinculado a un nodo del DOM real en el HTML. Prepara la raíz de la aplicación para gestionar el DOM de React en esa sección de la página.

- render: Es el método que toma los elementos de React y los dibuja físicamente en el DOM del navegador dentro del contenedor creado por el createRoot.

### 4. ¿Por qué el nombre de un componente de React empieza obligatoriamente con mayúscula?
- Es una regla impuesta por JSX. Los compiladores de React diferencian los elementos HTML nativos de los componentes personalizados basándose en la inicial, si empieza con minúscula asume que es una etiqueta HTML estándar del DOM, y si empieza con mayúscula sabe que es un componente de react definido por el usuario.


Wilber Valdez Quintero