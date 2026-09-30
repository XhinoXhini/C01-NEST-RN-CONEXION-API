# Ejercicio 06 - Estado de conexión

## Qué he aprendido
- A utilizar el hook `useState` de React para almacenar la información recibida desde el backend en el estado del componente.
- A comprender el ciclo de renderizado: cómo la llamada a la función actualizadora (`setMensaje`) provoca que React vuelva a dibujar la interfaz reflejando los nuevos datos.
- A gestionar el estado visual inicial previo a la conexión y el estado resultante tras la resolución de la promesa del `fetch`.

## Respuesta a la pregunta de comprensión
¿Qué aporta useState frente a una variable normal?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: una variable normal de JavaScript puede cambiar su valor en memoria, pero React no se entera de ese cambio y la interfaz permanece inmutable (sin actualizar). Al usar `useState` y su función actualizadora (`setMensaje`), React es notificado del cambio de estado y dispara automáticamente un nuevo renderizado del componente, reflejando al instante los datos recibidos del backend en la pantalla.

## Qué he modificado
- He configurado el estado inicial de `mensaje` con `"🔴 Sin conectar"`.
- He actualizado la función `cargarMensaje` para que, tras parsear el JSON de NestJS, actualice el estado a `"🟢 ¡Conexión conseguida! 🚀"`.
- He incluido manejo de carga con `ActivityIndicator` y captura de posibles fallos de red.

## Resultado
La interfaz muestra inicialmente un badge con `🔴 Sin conectar`. Al pulsar el botón "ACCIÓN PRINCIPAL", se realiza la petición GET a `/mensaje` y el estado pasa fluidamente a `🟢 ¡Conexión conseguida! 🚀`.