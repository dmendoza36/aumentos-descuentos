# Aumentos y descuentos

Web educativa con ambientación pixel art, explicaciones, fórmulas, ocho ejercicios resueltos y un examen de tres preguntas. Usa HTML, CSS y JavaScript con Vite. Las respuestas y los resultados permanecen solo en memoria y desaparecen al recargar.

## Ejecutar en desarrollo

Se necesita Node.js 20.19 o una versión compatible más reciente. Si usas nvm, ejecuta `nvm use` en esta carpeta para seleccionar la versión indicada en `.nvmrc`.

```bash
npm ci
npm run dev
```

Abre la dirección local que imprime Vite. El servidor escucha únicamente en el equipo local.

## Comprobar y preparar para publicación

```bash
npm test
npm run build
npm run preview
```

`npm test` comprueba la puntuación, los intentos incompletos y el reinicio. `npm run build` genera la web estática en `dist/`. `npm run preview` permite revisar esa compilación localmente. El alojamiento se definirá después de revisar el producto.

## Modificar el contenido y el diseño

| Archivo | Responsabilidad |
| --- | --- |
| `src/content.js` | Temas, fórmulas, hojas de ejercicios, preguntas y mensajes de progreso. |
| `src/main.js` | Pantallas, navegación, selección de respuestas y ventanas de resultado y salida. |
| `src/exam.js` | Cálculo de puntuación y creación de intentos. |
| `src/effects.js` | Sonidos originales de 8 bits y confeti. |
| `src/style.css` | Colores, tipografías, tamaños, adaptación a celular y movimiento reducido. |
| `public/assets/world.svg` | Escenario pixel art propio, editable como SVG. |

El examen mantiene A como respuesta correcta en sus tres preguntas, con valores de 6, 7 y 7 puntos. Los ejercicios permiten desplegar la resolución sin calificación. La navegación usa una pregunta por pantalla, permite retroceder y exige responder antes de avanzar. Salir de un intento solicita confirmación y descarta las respuestas; los reintentos comienzan desde cero.

Los efectos de sonido se generan en el navegador y están apagados inicialmente. La presentación funciona también en silencio y con movimiento reducido. Las fuentes se sirven localmente, por lo que no se realizan solicitudes a Google Fonts al visitar la web.

## Materiales y revisión

La [especificación](docs/ESPECIFICACION.md) recoge los acuerdos y las propuestas. El [plan de desarrollo](docs/PLAN_DESARROLLO.md) describe las entregas y sus comprobaciones. Antes de publicar, corresponde validar el contenido educativo y revisar la presentación con la usuaria. Los audios explicativos de WhatsApp siguen pendientes de transcripción.

## Créditos

- Escenario SVG e iconos: creados para este proyecto.
- Efectos de audio: sintetizados para este proyecto con Web Audio.
- [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) y [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans): fuentes bajo SIL Open Font License. Las licencias están incluidas en `public/fonts/`.
