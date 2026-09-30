# Ejercicio 07 - Carga automática

## Qué he aprendido
- A utilizar el hook `useEffect` de React con un array de dependencias vacío (`[]`) para disparar efectos secundarios en el montaje inicial del componente.
- A sincronizar la carga de datos del backend directamente con el ciclo de vida de la pantalla sin requerir interacción manual del usuario.
- A conservar mecanismos manuales de recarga reutilizando la misma función asíncrona tanto en el efecto como en eventos de usuario.

## Respuesta a la pregunta de comprensión
¿Qué diferencia hay entre llamar cargarMensaje desde un botón y desde useEffect?

Respuesta:
Porque cumple una responsabilidad concreta dentro del flujo que acabamos de construir: llamar a `cargarMensaje` desde un botón requiere una acción física o evento explícito del usuario (`onPress`), mientras que llamarlo dentro de un `useEffect` con array de dependencias vacío delega la ejecución en el ciclo de vida del componente, disparando la petición automáticamente en cuanto la pantalla se monta por primera vez.

## Qué he modificado
- He implementado el hook `useEffect` para solicitar los datos automáticamente al cargar la aplicación.
- He definido el estado inicial en `"Cargando..."`.
- He mantenido un botón con el texto `"RECARGAR"` para permitir volver a disparar la petición HTTP bajo demanda.

## Resultado
Al abrir la aplicación, se muestra inmediatamente el indicador de carga y el texto `"Cargando..."` hasta que se resuelve la petición GET hacia el backend, actualizándose sola a `"🟢 ¡Conexión conseguida! 🚀"`. Al pulsar `"RECARGAR"`, el ciclo de carga y refresco se repite de forma manual.