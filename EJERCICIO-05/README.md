# Ejercicio 05 - Mi primera conexión

## Qué he aprendido
- A comunicar una aplicación frontend en React Native (Expo) con un servidor backend en NestJS utilizando `fetch()`, `async/await` y parseo de respuestas con `.json()`.
- La necesidad de habilitar CORS (`app.enableCors()`) en el backend para permitir peticiones procedentes de orígenes externos o dispositivos en red.
- La diferencia de resolución de red: entender por qué un dispositivo móvil físico no puede usar `localhost` para referirse al servidor del ordenador y requiere la dirección IP local de la máquina.

## Respuesta a la pregunta de comprensión
¿Por qué el móvil necesita conocer la IP del equipo donde se ejecuta NestJS?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: dentro del dispositivo móvil, `localhost` (o `127.0.0.1`) hace referencia al propio teléfono y no a la máquina de desarrollo. Para que el cliente móvil pueda alcanzar el servidor NestJS que corre en el ordenador dentro de la red local compartida, debe apuntar a la dirección IPv4 concreta asignada al ordenador en dicha red.

## Qué he modificado
- He habilitado CORS en `backend/src/main.ts` con `app.enableCors()`.
- He implementado el endpoint `GET /mensaje` devolviendo texto y estado de confirmación.
- He conectado la función `cargarMensaje` al evento `onPress` del componente `Pressable` en React Native actualizando la interfaz con los datos reales recibidos desde el backend.

## Resultado
Al pulsar el botón "ACCIÓN PRINCIPAL" en la app móvil, se dispara la petición HTTP hacia `http://IP:3000/mensaje`, respondiendo el backend con código 200 OK y actualizándose la pantalla con el texto `"¡Conexión conseguida! 🚀"` y el estado `"conectado ✓"`.