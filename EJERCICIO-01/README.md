# Ejercicio 01 - Hello Backend

## Qué he aprendido
- Qué es un endpoint en backend combinando una ruta con un método HTTP.
- Cómo `@Controller('hola')` agrupa las rutas bajo el prefijo `/hola`.
- Cómo `@Get()` mapea peticiones HTTP de tipo GET a un método de clase para devolver una respuesta JSON.

## Respuesta a la pregunta de comprensión
¿Qué función cumple `@Get()` en este Controller?

Respuesta:
Cumple una responsabilidad concreta dentro del flujo: indica a NestJS que el método `saludar()` debe ejecutarse cuando llegue una petición HTTP con el método GET a la ruta `/hola`, retornando automáticamente el objeto serializado como JSON con código de estado 200 OK.

## Qué he modificado
- He implementado el método `saludar()` retornando no solo el mensaje inicial sino también la propiedad solicitada `curso: 'DAM'`.

## Resultado
Al realizar una petición GET a `http://localhost:3000/hola`, el servidor responde con:
```json
{
  "mensaje": "¡Hola desde NestJS! 🚀",
  "curso": "DAM"
}