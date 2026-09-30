# Ejercicio 11 - Mini tienda

## Qué he aprendido
- A emitir peticiones HTTP con método `POST` desde React Native utilizando `fetch()` con encabezados `Content-Type: application/json` y serialización de datos con `JSON.stringify()`.
- A recepcionar y mapear el cuerpo de la petición (payload) en NestJS utilizando el decorador `@Body()`.
- A completar el ciclo de mutación y sincronización de datos: enviar el nuevo elemento al backend, recibir el objeto persistido en memoria con su nuevo identificador y actualizar la lista local del estado en React Native.

## Respuesta a la pregunta de comprensión
¿Qué recorrido realiza el objeto hasta llegar a @Body()?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: el objeto se genera en React Native a partir de los campos del formulario (`nombre` y `precio`), se serializa a una cadena de texto JSON mediante `JSON.stringify()` y se emite en el cuerpo del request HTTP (`body`) acompañado del header `Content-Type: application/json`. El servidor NestJS recibe la transmisión por red, un middleware parsea automáticamente la cadena a un objeto JavaScript nativo y el decorador `@Body()` lo extrae e inyecta como parámetro tipado en el método `create` del controlador.

## Qué he modificado
- He creado el método `create` en `ProductosService` para asignar un identificador incremental y almacenar el nuevo producto en el array temporal.
- He implementado la ruta `@Post()` en `ProductosController` usando `@Body()`.
- He añadido en React Native un formulario con dos inputs (`nombre`, `precio`), botón `"AÑADIR"` y refresco reactivo de la lista de productos tras recibir la confirmación del backend.

## Resultado
La app muestra los productos existentes en una lista. Al escribir un nuevo nombre y precio y pulsar "AÑADIR", se ejecuta `POST http://172.22.28.55:3000/productos`. El backend genera el ID correspondiente, añade el elemento al array y la aplicación móvil actualiza de inmediato el catálogo agregando la nueva tarjeta.