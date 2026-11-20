# Especificación del MVP de aumentos y descuentos

Versión 0.2 · 19 de noviembre de 2026 · Primera implementación para revisión

La usuaria autorizó comenzar el desarrollo. Las reglas que estaban propuestas se aplican como base de trabajo revisable: una pregunta por pantalla, respuesta obligatoria, retroceso con conservación de respuestas, confirmación de salida que descarta el intento, reintentos ilimitados y resoluciones desplegables. Esto no sustituye la validación educativa pendiente. La primera entrega se mantiene local; la publicación se definirá después de la revisión.

La web ayudará a estudiantes a comprender aumentos y descuentos porcentuales mediante explicaciones, ejemplos, ejercicios y un examen de tres preguntas. El diseño combinará escenarios pixel art celestes con paneles blancos y texto oscuro. El desarrollo seguirá esta especificación y permitirá ajustar la presentación después de revisar la primera versión visual.

## Acuerdos y decisiones pendientes

Se distinguen tres estados: **confirmado**, expresado o aceptado por la usuaria; **propuesto**, comportamiento recomendado que todavía admite cambios; y **pendiente**, decisión que requiere información adicional. La aceptación de una dirección visual no implica aprobar automáticamente todas las reglas de funcionamiento.

| Decisión | Estado | Definición |
| --- | --- | --- |
| Objetivo y público | Confirmado | Enseñar aumentos y descuentos a estudiantes, con una presentación amigable para público infantojuvenil. |
| Recorrido y secciones | Confirmado | Inicio, introducción con menú, Temas, Fórmulas, Ejercicios, Examen y resultado. Wireframes de la conversación como base. |
| Dirección visual | Confirmado | Referencia celeste con pixel art, paneles blancos, texto oscuro y títulos con estilo de videojuego. |
| Tecnología | Confirmado como base de trabajo | HTML, CSS, JavaScript y Vite. |
| Datos | Confirmado | Sin cuentas, nombres, base de datos ni almacenamiento persistente de respuestas o puntuaciones. |
| Examen | Confirmado | Tres preguntas, cuatro alternativas por pregunta, A correcta en las tres, puntajes 6, 7 y 7. |
| Retroalimentación | Confirmado | Mensajes de progreso, sin etiquetas de aprobado o desaprobado. |
| Sonidos | Confirmado en intención | Efectos que evoquen videojuegos o consolas. Archivos y método de generación por elegir. |
| Navegación del examen | Propuesto | Una pregunta por pantalla, respuesta obligatoria para avanzar, retroceso y cambio de selección. |
| Salida y reintentos | Propuesto | Advertir antes de abandonar un intento; al salir se pierde el avance. Reintentos ilimitados desde cero. |
| Ejercicios | Propuesto | Mostrar enunciados y permitir revelar sus resoluciones mediante un botón. |
| Edad y currículo | Pendiente | Precisar grado principal y objetivos de aprendizaje medibles con la persona responsable del contenido. |
| Publicación | Pendiente | Elegir alojamiento y destinatarios cuando corresponda publicar. |

La persona responsable de la idea valida el contenido educativo. La desarrolladora convierte los acuerdos en requisitos y verifica el producto.

## Material educativo y referencias

| Fuente | Uso |
| --- | --- |
| `AUMENTO Y DESCUENTO Mendoza Prudencio David Alexander.pdf` | Fuente de contenido, ejemplos, fórmulas, hojas de trabajo y refuerzo. Tiene 20 páginas. |
| Imagen corregida del examen compartida en la conversación | Versión vigente de las tres preguntas y sus alternativas. Sustituye el examen de la página 20 del PDF. |
| `Diseño sin título.pdf` | Referencia visual principal: escenarios celestes y elementos pixel art. |
| `Diseño sin título (1).pdf` | Referencia visual secundaria de estilo pixel art. |
| Dos audios de explicación en formato OGG | Pendientes de transcripción o resumen. Su contenido no está incorporado a los requisitos. |

Los textos de plantilla, contactos ficticios y frases dirigidas al autor de las diapositivas no forman parte del contenido para estudiantes. Las fórmulas y resoluciones incrustadas como imágenes requieren revisión visual antes de transcribirlas. El contenido tributario o laboral que se conserve debe ser validado por la persona responsable y contextualizado como ejemplo.

Los archivos originales permanecen en sus ubicaciones actuales; esta documentación no los copia al proyecto.

## Pantallas y navegación

### Inicio

Mostrar el título «Aumentos y descuentos», la pregunta «¿Quieres saber cómo aplicar aumentos y descuentos en tu día a día?» y el botón «Comenzar». La decoración pixel art rodeará el contenido y dejará libre el área de lectura.

«Comenzar» conduce a la introducción. Se propone que el sonido esté apagado al cargar y pueda activarse con un control visible.

### Introducción y menú

Distribuir las aplicaciones cotidianas en tres bloques: compras y ofertas, impuestos y recargos, e ingresos y aumentos. Mostrar accesos con texto a **Temas**, **Fórmulas**, **Ejercicios** y **Examen**.

### Temas

Organizar el contenido en aumentos, descuentos y operaciones sucesivas de aumentos y descuentos. Cada tema presenta explicación, utilidad y ejemplos del material. Mantener disponible «Volver al menú».

### Fórmulas

Agrupar las fórmulas por tema y explicar sus símbolos. Mostrar fórmulas como contenido legible, con ejemplos diferenciados de la explicación. Mantener disponible «Volver al menú».

### Ejercicios

Incluir Hoja de trabajo y Hoja de refuerzo, cada una con cuatro ejercicios del material. Se propone un botón «Ver resolución» para cada ejercicio, sin introducir campos de respuesta ni corrección automática en este MVP. La resolución debe corresponder al ejercicio seleccionado.

### Examen

Mostrar enunciado completo, cuatro alternativas A–D y progreso «Pregunta n de 3». Según la propuesta de navegación, incluir «Anterior» y «Siguiente»; en la última pregunta, sustituir «Siguiente» por «Finalizar». La primera pregunta no ofrece un retroceso inexistente.

### Resultado

Al finalizar, mostrar una ventana con puntuación sobre 20, cantidad de aciertos, mensaje de progreso y reacción visual. Permitir reintentar o volver al menú. La información del resultado debe ser comprensible aunque no se reproduzcan sonidos ni animaciones.

## Reglas propuestas del examen

Estas reglas se mantienen como propuesta para validación conjunta.

1. Al comenzar un intento, ninguna alternativa está seleccionada y no existe límite de tiempo.
2. Cada pregunta permite una única selección. Elegir otra alternativa reemplaza la anterior.
3. Para avanzar, la pregunta actual debe tener una respuesta. Si falta, mostrar «Selecciona una alternativa para continuar» sin indicar la respuesta correcta.
4. Al retroceder, conservar la selección y permitir modificarla.
5. Antes de finalizar, comprobar que las tres preguntas tengan respuesta.
6. Las correcciones se reservan para después de finalizar. El resultado mínimo incluye puntuación y aciertos; la revisión detallada de soluciones del examen queda pendiente de definir.
7. Si se intenta volver al menú durante un examen, explicar que se perderá el avance y ofrecer «Continuar examen» y «Salir al menú». Cancelar conserva el intento; salir lo descarta.
8. Reintentar inicia un examen nuevo, limpia respuestas y resultado, y vuelve a la primera pregunta. Se permiten intentos ilimitados.
9. Las respuestas y el resultado existen solo en memoria mientras la página está abierta. Recargar o cerrar elimina ese estado. No usar almacenamiento local, almacenamiento de sesión ni cookies para conservarlo.
10. Las opciones mantienen su orden: A es correcta en las tres. No aleatorizarlas sin un nuevo acuerdo.
11. Una vez finalizado un intento, cambiar la puntuación requiere iniciar otro intento. Repetir la acción de finalizar no duplica celebraciones ni cálculos.

## Preguntas corregidas

Se unifica la presentación con coma decimal y símbolo de porcentaje. Los valores de los distractores se conservan, aunque sean incorrectos.

### Pregunta 1

**Valor: 6 puntos.**

Un taller de fabricación produce una mesa cuyo costo de producción es S/ 250. Para venderla a un distribuidor, le aplica un aumento del 24 % por margen de utilidad. Sin embargo, el distribuidor debe pagar un 18 % adicional sobre ese monto por concepto de IGV. ¿Cuál es el precio final que paga el distribuidor y cuál es el porcentaje total de aumento respecto al costo de producción?

| Alternativa | Precio final y porcentaje |
| --- | --- |
| A | S/ 365,80 y 46,32 % |
| B | S/ 355,90 y 34,6 % |
| C | S/ 208,80 y 16,54 % |
| D | S/ 522 y 34,15 % |

Comprobación: 250 × 1,24 × 1,18 = 365,80. El aumento respecto de 250 es (365,80 − 250) / 250 × 100 = 46,32 %.

### Pregunta 2

**Valor: 7 puntos.**

En una tienda de tecnología, una tablet de S/ 1 200 tiene un 20 % de descuento por aniversario. Si el cliente paga con una billetera digital afiliada, recibe un 15 % de descuento adicional sobre el precio ya rebajado. ¿Cuánto paga finalmente el cliente y cuánto dinero ahorra en total?

| Alternativa | Pago y ahorro |
| --- | --- |
| A | Paga S/ 816 y ahorra S/ 384 |
| B | Paga S/ 801 y ahorra S/ 84 |
| C | Paga S/ 752 y ahorra S/ 237 |
| D | Paga S/ 576 y ahorra S/ 304 |

Comprobación: 1 200 × 0,80 × 0,85 = 816. El ahorro es 1 200 − 816 = 384.

### Pregunta 3

**Valor: 7 puntos.**

El precio de entrada a un parque recreativo se incrementa en un 25 % durante la temporada alta. Al terminar la temporada, se aplica un 20 % de descuento sobre el precio de temporada alta para incentivar las visitas. Si la entrada costaba S/ 40 antes de la temporada alta, ¿cuál es su precio final y cuál es la variación porcentual neta respecto al precio inicial?

| Alternativa | Precio final y variación |
| --- | --- |
| A | S/ 40 y variación 0 % |
| B | S/ 50 y variación 1 % |
| C | S/ 37 y variación 0,12 % |
| D | S/ 47 y variación 3 % |

Comprobación: 40 × 1,25 × 0,80 = 40. La variación respecto del precio inicial es 0 %.

## Puntuación y mensajes de progreso

Sumar los valores de las respuestas correctas; las incorrectas valen cero y no restan puntos. Mostrar puntuación y aciertos. El tipo de reacción depende del número de aciertos, no de un umbral de nota.

| Aciertos | Puntuación posible | Mensaje propuesto | Reacción propuesta |
| --- | --- | --- | --- |
| 0 | 0/20 | ¡Sigue practicando! Puedes repasar los temas e intentarlo otra vez. | Animación breve de ánimo. |
| 1 | 6/20 o 7/20 | ¡Ya tienes un primer acierto! Sigue practicando. | Personaje que invita a reintentar. |
| 2 | 13/20 o 14/20 | ¡Buen trabajo! Acertaste dos de tres preguntas. | Felicitación animada. |
| 3 | 20/20 | ¡Excelente! Acertaste todas las preguntas. | Celebración con confeti. |

El enfoque de progreso está confirmado; los textos exactos y las animaciones admiten ajustes. No mostrar etiquetas de aprobado o desaprobado.

## Diseño y accesibilidad

Usar celeste para la ambientación, blanco para los paneles y azul oscuro para el texto y las acciones principales. La paleta exacta y las fuentes se ajustarán en la revisión visual. Reservar la tipografía pixelada para títulos cortos y usar una fuente sencilla para párrafos, fórmulas y preguntas.

Presentar los textos largos en bloques y adaptar las columnas a una sola en celular. No convertir las diapositivas completas en imágenes de lectura. Las ilustraciones no deben cruzarse con los textos.

Se proponen los siguientes criterios de calidad:

- Texto principal de al menos 16 px y contraste mínimo de 4,5:1 para texto normal.
- Navegación por teclado, foco visible, etiquetas para controles y alternativas con toda su fila pulsable.
- Al cambiar de pantalla, llevar el foco al encabezado correspondiente. La ventana de resultado debe gestionar el foco y permitir salir mediante sus controles.
- Sonidos opcionales, activados mediante una acción del usuario, con control de silencio disponible durante la experiencia.
- Respetar la preferencia de movimiento reducido y mostrar un resultado textual equivalente.
- En anchos de 360, 768 y 1280 px, evitar desbordamientos horizontales y contenido oculto. Estos tamaños son muestras de revisión, no límites de compatibilidad.

## Tecnología y recursos

HTML estructura el contenido, CSS resuelve la presentación y JavaScript controla navegación, examen, sonidos y resultados. Vite sirve el proyecto durante el desarrollo y genera los archivos estáticos para publicación. No se requiere backend para el alcance actual.

Separar contenido educativo, estado de navegación, cálculo del examen, efectos de audio y estilos. Las correcciones de textos o alternativas deben poder realizarse sin modificar la lógica de puntuación.

Las imágenes pueden ser archivos estáticos. Los movimientos sencillos pueden hacerse con CSS y el confeti con JavaScript y canvas. Para el audio se evaluarán efectos originales de 8 bits generados en el navegador o archivos con permiso de uso; los audios explicativos de WhatsApp no son los sonidos del producto. Música de fondo y narración quedan fuera del alcance confirmado.

Referencias técnicas: [función de JavaScript en la web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript), [guía de Vite](https://vite.dev/guide/) y [publicación estática con Vite](https://vite.dev/guide/static-deploy.html).

## Criterios de aceptación

1. Inicio y menú permiten recorrer las cuatro secciones sin enlaces rotos.
2. Cada sección permite volver al menú. El examen respeta la regla de salida que se valide.
3. El contenido educativo coincide con el material validado; las tres preguntas coinciden con la imagen corregida.
4. Cada pregunta tiene cuatro alternativas y una única selección.
5. La puntuación y los aciertos coinciden con las ocho combinaciones de la tabla de verificación del plan de desarrollo.
6. La navegación conserva o descarta las respuestas según las reglas adoptadas, y reintentar limpia el intento anterior.
7. El resultado usa mensajes de progreso y sigue siendo comprensible sin audio ni animaciones.
8. Activar y silenciar el sonido funciona durante toda la experiencia.
9. Se puede recorrer el examen con teclado; las comprobaciones de lectura, contraste y tamaños de pantalla resultan satisfactorias.
10. La compilación de producción termina correctamente y su vista local permite recorrer el flujo principal.

## Decisiones para la siguiente revisión

- Confirmar en conjunto las reglas propuestas del examen, especialmente respuesta obligatoria, salida al menú y reintentos.
- Confirmar si los ejercicios revelarán sus resoluciones mediante un botón.
- Validar grado principal, objetivos educativos y transcripción de fórmulas y resoluciones.
- Elegir efectos de sonido y reacciones visuales durante la revisión de la primera presentación.
- Definir publicación cuando exista una versión lista para compartir.

La primera implementación aplica la base de trabajo indicada al inicio. Los ajustes de comportamiento, contenido y presentación se registrarán durante su revisión.
