1. ¿Por qué una unión de valores y no una enumeración?
Una union de valores ('activo' | 'devuelto' | 'vencido') es mejor porque es mas simple y no genera codigo extra en JavaScript como los "enum" que generan codigo adicional. Y tambien permite asignar los valores directamente como cadenas de texto sin tener que importar el enum en todos los archivos.

2. ¿Qué se gana con el tipo desconocido en lugar del que acepta todo (any)?
Se gana seguridad en los tipos. El tipo any apaga por completo la revision que hace el compilador, permitiendo acceder a propiedades sin marcar error. En cambio, "unknown" obliga al programador a hacer comprobaciones de tipo antes de poder usar la variable, evitando errores en tiempo de ejecucion.

3. ¿Por qué la fecha entra como parámetro?
Entra como parametro para hacer que la funcion sea predecible y facil de probar. Si la funcion obtuviera la fecha actual internamente "(new Date()), su comportamiento iba cambiar cada dia. Al pasarla como parametro, podemos simular cualquier fecha ya sea pasada o futura y asegurar que los calculos funcionen correctamente en cualquier escenario.

4. Paso 6 Transpilar no es verificar
Al cambiar el tipo de numero a texto y apagar el modo estricto en el archivo de configuracion, el compilador dejo de marcar errores. Esto provocó que el programa se ejecutara con un error, donde el cálculo de la multa realizó una concatenación de texto en lugar de una operación matemática. Al encender nuevamente el modo estricto, el compilador volvió a detectar y prevenir estas fallas.
