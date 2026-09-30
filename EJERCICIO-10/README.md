# Ejercicio 10 - Likes

## Qué he aprendido
- A realizar operaciones de modificación en el backend utilizando el verbo HTTP `PATCH` desde React Native mediante la opción `method: 'PATCH'` en `fetch()`.
- A mapear rutas de actualización en NestJS con el decorador `@Patch(':id/like')`.
- A actualizar el estado de React utilizando directamente la entidad modificada que devuelve la API, reflejando el incremento de contadores en tiempo real.

## Respuesta a la pregunta de comprensión
¿Por qué los likes vuelven al valor inicial cuando reiniciamos NestJS?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: la persistencia actual reside únicamente en un array en la memoria RAM del servidor gestionado por el Service. Cuando el proceso de NestJS se detiene o reinicia, la memoria de ejecución se libera y las variables se vuelven a inicializar con sus valores estáticos por defecto (14 likes), hasta que en futuros módulos se sustituya la memoria volátil por una base de datos persistente.

## Qué he modificado
- He implementado el método `darLike` en `MascotasService` que busca la mascota, incrementa su propiedad `likes` en 1 y devuelve el objeto resultante.
- He creado el endpoint `@Patch(':id/like')` en `MascotasController`.
- He diseñado en React Native una interfaz con el botón `"❤️ ME GUSTA"` que dispara la petición PATCH y actualiza la cifra en pantalla con la respuesta del servidor.

## Resultado
Al abrir la pantalla, la aplicación carga a Toby con `14 likes`. Cada vez que el usuario presiona `"❤️ ME GUSTA"`, se envía una petición `PATCH http://172.22.28.55:3000/mascotas/1/like`, el backend suma 1 al contador y la tarjeta actualiza de inmediato el contador a 15, 16, 17, etc.