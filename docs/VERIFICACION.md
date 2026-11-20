# Verificación de la primera versión

La primera versión se comprobó localmente con Node.js 20.19.5 y Vite 7.3.8. Las comprobaciones de navegador se ejecutaron con Chrome y un perfil temporal sobre la compilación de producción.

## Resultados

| Comprobación | Resultado |
| --- | --- |
| `npm test` | 12 pruebas correctas: ocho combinaciones de aciertos, respuestas inválidas, distractores, reinicio y estructura del examen. |
| `npm run build` | Compilación correcta en `dist/`. |
| Dependencias instaladas | La instalación final informó cero vulnerabilidades conocidas. |
| Navegación | Inicio, menú y cuatro secciones accesibles. |
| Ejercicios | Ocho resoluciones desplegables comprobadas, distribuidas entre las dos hojas. |
| Examen | Selección única, bloqueo de omisiones, retroceso, cambio de respuesta, salida y cancelación comprobados. |
| Resultados | Ocho combinaciones de aciertos verificadas también en la interfaz, incluidos 13/20 y 14/20. |
| Reintentos y recarga | El reintento limpia las respuestas; recargar vuelve al inicio. No se escriben datos en localStorage o sessionStorage. |
| Sonido | Activación y silencio funcionan sin errores de ejecución. La valoración del sonido queda para la revisión con la usuaria. |
| Teclado | Selección de alternativas, apertura de pantallas, ciclo de foco de la ventana y cierre con Escape comprobados. |
| Tamaños de pantalla | Inicio, menú, temas, fórmulas, ejercicios y examen sin desbordamiento horizontal a 360, 768 y 1280 px. |
| Errores de navegador | Sin excepciones de JavaScript ni solicitudes con respuesta HTTP de error durante el recorrido automatizado. |
| Contraste | Revisión automatizada orientativa sin incidencias en los textos visibles de las seis pantallas principales. No constituye una auditoría completa de accesibilidad. |

## Capturas para revisión

- [Inicio en computadora](capturas/inicio.png).
- [Inicio en celular](capturas/inicio-celular.png).
- [Examen](capturas/examen.png).
- [Resultado](capturas/resultado.png).

## Revisión pendiente

La usuaria debe revisar el diseño y los comportamientos aplicados como base de trabajo. La persona responsable de la idea debe validar contenido y objetivos educativos. También queda pendiente incorporar cualquier precisión procedente de los audios explicativos cuando exista su transcripción. Las pruebas de esta entrega se limitan a Chrome; otros navegadores requieren una revisión posterior. La web permanece local y el alojamiento se definirá después de esta revisión.
