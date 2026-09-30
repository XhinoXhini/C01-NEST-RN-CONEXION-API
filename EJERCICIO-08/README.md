# Ejercicio 08 - Menú del restaurante

## Qué he aprendido
- A representar colecciones dinámicas de datos recibidas desde una API REST utilizando el componente optimizado `FlatList` de React Native.
- A conectar las tres propiedades fundamentales de `FlatList`: `data` (la fuente de datos guardada en el estado), `renderItem` (la función que transforma cada objeto JSON en componentes visuales) y `keyExtractor` (el identificador único y estable para cada fila).
- A estructurar el flujo completo desde el array en memoria del Service de NestJS hasta el renderizado visual de tarjetas en el dispositivo móvil.

## Respuesta a la pregunta de comprensión
¿Qué relación existe entre el array del Service y data={productos}?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: el array del Service es la fuente de datos original en el backend; esa información viaja serializada como JSON a través de HTTP, es recibida por `fetch()`, se almacena en el estado `productos` mediante `setProductos()` y, finalmente, se suministra a la propiedad `data={productos}` de `FlatList` para que React Native sepa exactamente qué elementos debe iterar y renderizar en pantalla.

## Qué he modificado
- He ampliado el backend con un cuarto producto en `ProductosService`: `{ id: 4, nombre: 'Ensalada César 🥗', precio: 7.5, categoria: 'Entrantes' }`.
- He diseñado una plantilla de tarjeta en el frontend (`renderCard`) para presentar el nombre, categoría y precio formateado en euros de cada producto.

## Resultado
Al arrancar la aplicación, se consulta automáticamente el endpoint `GET /productos` y `FlatList` genera una lista con 4 tarjetas estilizadas, cada una con su nombre, categoría y precio.