# Ejercicio 09 - Busca superhéroe

## Qué he aprendido
- A construir rutas dinámicas (Path Params) en el cliente React Native interpolando el estado ingresado por el usuario en la URL del `fetch`.
- A enlazar el ciclo completo: entrada en `TextInput` -> estado local `idBusqueda` -> concatenación en petición HTTP -> extracción con `@Param('id')` en NestJS -> búsqueda en Service.
- A manejar respuestas de error (como códigos 404) actualizando el estado de la interfaz para informar al usuario de recursos inexistentes.

## Respuesta a la pregunta de comprensión
Sigue el valor id desde React Native hasta @Param('id'). ¿Por dónde pasa?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: el valor nace en el componente móvil cuando el usuario lo teclea en el `TextInput`, guardándose en el estado de React (`idBusqueda`); al presionar el botón de búsqueda, se concatena dentro de la URL de la petición (`http://IP:3000/heroes/${idBusqueda}`); viaja por la red a través del protocolo HTTP hasta el servidor NestJS; el enrutador de NestJS compara la URL recibida contra el patrón `@Get(':id')`, extrae el segmento dinámico y lo inyecta directamente como argumento en el método del Controller gracias al decorador `@Param('id')`.

## Qué he modificado
- He implementado un `TextInput` numérico y un botón con el texto `"BUSCAR"` en React Native.
- He creado una ficha visual detallada que muestra el nombre, poder y universo del héroe recuperado.
- He implementado en `HeroesService` el control de excepciones con `NotFoundException` para identificar búsquedas con identificadores que no existen.

## Resultado
Al escribir `1` en el campo y pulsar "BUSCAR", la interfaz muestra la ficha de Spider-Man con su poder y universo Marvel. Si se introduce un ID no existente como `99`, la aplicación captura el error 404 y muestra un aviso visual de que el superhéroe no fue encontrado.