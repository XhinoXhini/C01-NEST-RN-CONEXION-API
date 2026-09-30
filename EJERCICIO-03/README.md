# Ejercicio 03 - Busca mascota

## Qué he aprendido
- A capturar parámetros dinámicos de ruta (Path Params) mediante la anotación `@Get(':id')`.
- A inyectar y recibir esos parámetros en el método usando el decorador `@Param('id')`.
- A buscar elementos por identificador dentro de una colección usando el método `.find()` en el Service.

## Respuesta a la pregunta de comprensión
¿Por qué convertimos id con Number(id)?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: todo parámetro recibido a través de la URL mediante HTTP siempre llega al backend como una cadena de texto (`string`). Como los identificadores de nuestro modelo de datos/array son numéricos (`number`), debemos convertir la cadena a tipo numérico con `Number(id)` para que la comparación estricta (`===`) en la búsqueda funcione correctamente.

## Qué he modificado
- He añadido una tercera mascota al array del servicio: `{ id: 3, nombre: 'Nemo 🐠', tipo: 'Pez' }`.
- He añadido control de errores con `NotFoundException` para responder con un 404 claro cuando se solicita un ID que no existe.

## Resultado
- Petición `GET http://localhost:3000/mascotas/2`:
```json
{
  "id": 2,
  "nombre": "Rocky 🐶",
  "tipo": "Perro"
}