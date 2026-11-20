# Plan de desarrollo del MVP de aumentos y descuentos

El desarrollo se organiza en entregas pequeñas que permiten revisar contenido, presentación y comportamiento por separado. La referencia funcional es [la especificación del MVP](ESPECIFICACION.md). La primera implementación ya está disponible para revisión local; las casillas distinguen el trabajo comprobado de las validaciones pendientes.

## Revisión previa

- [ ] Revisar la especificación y resolver o adoptar explícitamente las reglas propuestas del examen.
- [ ] Confirmar cómo se mostrarán las resoluciones de los ejercicios.
- [x] Revisar visualmente las fórmulas y resoluciones incluidas como imágenes en las diapositivas.
- [ ] Registrar las correcciones educativas que indique la persona responsable.

## Entrega visual y navegación

- [x] Preparar el proyecto HTML, CSS y JavaScript con Vite.
- [x] Definir colores, tipografía de títulos y tipografía de lectura.
- [x] Construir inicio, menú y estructura de las cuatro secciones.
- [x] Añadir un escenario celeste pixel art y paneles blancos que mantengan libre el área de lectura.
- [ ] Revisar la presentación en celular y computadora y ajustar el diseño con la usuaria.

**Comprobación:** abrir la vista local, recorrer inicio y menú, visitar las cuatro secciones y comprobar foco visible y ausencia de desbordamiento horizontal. En esta entrega las secciones pueden mostrar solo su estructura; no se presentan como producto completo.

## Contenido educativo

- [ ] Transcribir las explicaciones validadas y distribuirlas en bloques de lectura.
- [x] Presentar fórmulas, símbolos y ejemplos.
- [x] Incorporar los cuatro ejercicios de trabajo y los cuatro de refuerzo.
- [x] Incorporar sus resoluciones con la interacción que se valide.
- [x] Comparar textos, números y fórmulas con el material educativo.

**Comprobación:** todos los contenidos previstos están presentes; cada resolución corresponde a su enunciado; no aparecen textos de plantilla ni notas dirigidas al autor.

## Examen y resultados

- [x] Incorporar las preguntas corregidas y las cuatro alternativas de cada una.
- [x] Implementar selección única, progreso y navegación conforme a las reglas adoptadas.
- [x] Implementar cálculo de puntuación y cantidad de aciertos.
- [x] Mostrar resultado y mensajes de progreso.
- [x] Implementar salida al menú y reintentos conforme a las reglas adoptadas.
- [x] Verificar que recargar elimina las respuestas y el resultado.

Para verificar el cálculo, «sí» indica una respuesta correcta y «no» una incorrecta. La alternativa correcta es A en cada pregunta.

| Pregunta 1 correcta | Pregunta 2 correcta | Pregunta 3 correcta | Puntos | Aciertos |
| --- | --- | --- | --- | --- |
| No | No | No | 0 | 0 |
| Sí | No | No | 6 | 1 |
| No | Sí | No | 7 | 1 |
| No | No | Sí | 7 | 1 |
| Sí | Sí | No | 13 | 2 |
| Sí | No | Sí | 13 | 2 |
| No | Sí | Sí | 14 | 2 |
| Sí | Sí | Sí | 20 | 3 |

**Comprobación:** verificar las ocho combinaciones; cambiar una selección antes de finalizar; recorrer preguntas en ambos sentidos; comprobar respuestas omitidas, cancelación de salida, abandono y reintento según las reglas adoptadas. Para la puntuación, una prueba automática pequeña resulta apropiada por su efecto directo sobre la evaluación.

## Sonidos y animaciones

- [x] Elegir o crear efectos breves de videojuego para acciones y resultados.
- [x] Implementar activación y silencio conforme a la regla acordada.
- [x] Añadir reacciones según los aciertos y confeti para tres aciertos.
- [x] Detener los efectos al salir de la pantalla o terminar la animación.
- [x] Respetar movimiento reducido y conservar mensajes comprensibles sin sonido.

**Comprobación:** activar y silenciar durante el recorrido, repetir un intento, salir del resultado y comprobar que no permanecen sonidos o animaciones de pantallas anteriores.

## Revisión del producto completo

- [x] Comparar el producto con los criterios de aceptación de la especificación.
- [x] Recorrerlo con teclado y comprobar el foco de la ventana de resultados.
- [x] Revisar contraste y lectura en muestras de 360, 768 y 1280 px de ancho.
- [x] Ejecutar la compilación de producción y revisar el recorrido principal en su vista local.
- [ ] Recoger ajustes visuales y validación educativa.
- [ ] Definir destino y audiencia para una publicación posterior.

La revisión de la documentación no sustituye la ejecución de estas comprobaciones sobre la aplicación cuando esté implementada.
