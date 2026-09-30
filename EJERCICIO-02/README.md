# Ejercicio 02 - API de pizzas

## Qué he aprendido
- A separar la responsabilidad del Controller (encargado de recibir y gestionar la petición HTTP) de la del Service (encargado de la lógica de negocio y gestión de los datos).
- A inyectar dependencias en NestJS mediante el constructor (`private readonly pizzasService: PizzasService`).
- A utilizar `@Injectable()` para permitir que la clase Service pueda ser inyectada por el motor de NestJS.

## Respuesta a la pregunta de comprensión
¿Por qué colocamos el array en el Service y no en el Controller?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: el Controller solo debe ocuparse de la capa de transporte HTTP (rutas, verbos, parámetros), mientras que la manipulación, consulta y persistencia de los datos (incluso cuando es un array en memoria simulado) es responsabilidad exclusiva del Service. Así, cuando en el futuro se sustituya el array por una base de datos real, el Controller no necesitará ningún cambio.

## Qué he modificado
- He implementado el método `findAll()` en `PizzasService` retornando el array de pizzas.
- He añadido una tercera pizza solicitada con emoji y precio: `{ id: 3, nombre: 'Barbacoa 🍖', precio: 12 }`.

## Resultado
Al hacer una petición GET a `http://localhost:3000/pizzas`, el servidor responde con el listado en formato JSON:
```json
[
  { "id": 1, "nombre": "Margarita 🍕", "precio": 9 },
  { "id": 2, "nombre": "Cuatro Quesos 🧀", "precio": 11 },
  { "id": 3, "nombre": "Barbacoa 🍖", "precio": 12 }
]