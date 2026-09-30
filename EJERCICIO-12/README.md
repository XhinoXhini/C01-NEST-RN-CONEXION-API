# Ejercicio 12 - Creature Lab

## Qué he aprendido
- A consolidar el ciclo integral de desarrollo Full Stack combinando peticiones de lectura de colecciones (`GET /criaturas`), búsquedas dinámicas por Path Parameter (`GET /criaturas/:id`) y mutaciones con actualización en tiempo real (`PATCH /criaturas/:id/like`).
- A sincronizar múltiples estados interdependientes en React Native: la lista global (`FlatList`), el elemento seleccionado en la tarjeta principal y los controles de entrada para búsquedas por identificador.
- A propagar los cambios devueltos por el backend tanto al detalle activo como a la colección local sin necesidad de realizar recargas completas ni reiniciar la interfaz.

## Respuesta a la pregunta de comprensión
¿Podrías explicar el viaje completo de un dato sin mirar el código?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: el flujo inicia en React Native con una interacción de usuario (un toque o pulsación en "Me gusta"), `fetch()` emite una petición HTTP con el método correspondiente (`PATCH /criaturas/:id/like`) hacia la IP del servidor; en NestJS, el enrutador canaliza la petición al Controller mediante el decorador correspondiente (`@Patch(':id/like')`), el Controller extrae el parámetro de ruta con `@Param('id')` y delega la operación en el Service; el Service busca la criatura en su array, actualiza su propiedad en memoria y retorna el objeto mutado; el Controller lo serializa a JSON y responde al cliente con código 200 OK; finalmente, React Native procesa la respuesta asíncrona, actualiza su estado local con `setSeleccionada` y `setCriaturas`, forzando a React a renderizar de nuevo la vista con la cifra actualizada.

## Qué he modificado
- He diseñado en NestJS una entidad con avatar, nombre, elemento y contador de likes, proveyendo endpoints para listado general, búsqueda unitaria y actualización de likes.
- He implementado en React Native una interfaz integrada que combina un buscador superior por ID, un panel de detalle con botón interactivo de "Me gusta" y la colección completa navegable con `FlatList`.

## Resultado
Al abrir la app, `useEffect` realiza la petición a `GET /criaturas`, cargando los elementos en la lista y preseleccionando el primero. El usuario puede buscar por ID o tocar cualquier elemento de la lista para cargarlo en el visor principal, y al pulsar "❤️ ME GUSTA", se ejecuta la mutación `PATCH` en NestJS reflejando el nuevo valor tanto en el visor de detalle como en la lista general.