# Ejercicio 04 - Filtra videojuegos

## Qué he aprendido
- A capturar parámetros de consulta (Query Params) opcionales usando el decorador `@Query('genero')`.
- La diferencia fundamental entre un Path Parameter (identificador único del recurso) y un Query Parameter (criterio de filtrado o búsqueda sobre una colección).
- A implementar filtrado condicional en el Service con el método `.filter()`.

## Respuesta a la pregunta de comprensión
¿Cuándo usarías /juegos/3 y cuándo /juegos?genero=aventura?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: usaría `/juegos/3` (Path Param) cuando quiero acceder a un recurso específico e inequívoco identificado por su ID (el juego número 3). En cambio, usaría `/juegos?genero=aventura` (Query Param) cuando quiero consultar la colección completa de juegos pero aplicando un criterio de filtrado opcional, búsqueda o modificación de la lista sin alterar el recurso principal al que apunto.

## Qué he modificado
- He creado una colección de cuatro videojuegos con distintos géneros en `JuegosService`.
- He implementado la lógica para que `findAll` devuelva todos los juegos si no se proporciona el parámetro, o los filtre si se especifica un género concreto.

## Resultado
- Petición `GET http://localhost:3000/juegos`: devuelve los 4 videojuegos registrados.
- Petición `GET http://localhost:3000/juegos?genero=aventura`:
```json
[
  { "id": 1, "titulo": "The Legend of Zelda", "genero": "aventura" },
  { "id": 4, "titulo": "Uncharted", "genero": "aventura" }
]