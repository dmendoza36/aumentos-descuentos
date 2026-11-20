export const topics = [
  {
    id: 'aumentos', label: 'Aumentos', symbol: '+', color: 'blue',
    title: 'Cuando una cantidad crece',
    intro: 'Un aumento porcentual añade una parte del valor inicial. El nuevo valor representa más del 100 % de la cantidad original.',
    uses: ['Calcular un precio con recargos o impuestos.', 'Conocer un sueldo después de un incremento.', 'Medir cuánto crece una población o una producción.'],
    formula: 'Valor final = Valor inicial × (1 + A / 100)',
    steps: ['Identifica la cantidad inicial.', 'Divide el porcentaje de aumento entre 100.', 'Suma ese resultado a 1 para obtener el factor.', 'Multiplica el valor inicial por el factor.'],
    example: { title: 'Un sueldo que aumenta', text: 'Un sueldo de S/ 1 200 aumenta un 35 %. ¿Cuál es el nuevo sueldo?', calculations: ['35 % de 1 200 = 0,35 × 1 200 = S/ 420', '1 200 + 420 = S/ 1 620'], result: 'El nuevo sueldo es S/ 1 620.' },
    tip: 'Para encontrar el valor inicial, divide el valor final entre el factor. Si un auto cuesta S/ 39 200 después de subir un 12 %, antes costaba 39 200 ÷ 1,12 = S/ 35 000.'
  },
  {
    id: 'descuentos', label: 'Descuentos', symbol: '−', color: 'green',
    title: 'Cuando pagas un poco menos',
    intro: 'Un descuento porcentual resta una parte del precio inicial. El factor de descuento representa la parte del precio que sí pagarás.',
    uses: ['Calcular el precio final de una oferta.', 'Saber cuánto dinero ahorras.', 'Comparar promociones y descuentos sucesivos.'],
    formula: 'Valor final = Valor inicial × (1 − D / 100)',
    steps: ['Identifica el precio antes de la rebaja.', 'Divide el porcentaje de descuento entre 100.', 'Resta ese resultado a 1.', 'Multiplica el precio inicial por el factor.'],
    example: { title: 'Una mochila en oferta', text: 'Una mochila cuesta S/ 160 y tiene un 20 % de descuento. ¿Cuánto ahorras y cuánto pagas?', calculations: ['Ahorro: 160 × 0,20 = S/ 32', 'Precio final: 160 × 0,80 = S/ 128'], result: 'Ahorras S/ 32 y pagas S/ 128.' },
    tip: 'Para encontrar el precio original, divide lo pagado entre el factor. Si una chaqueta cuesta S/ 170 después de un descuento del 15 %, antes costaba 170 ÷ 0,85 = S/ 200.'
  },
  {
    id: 'sucesivos', label: 'Operaciones sucesivas', symbol: '%', color: 'purple',
    title: 'Un cambio después de otro',
    intro: 'Cuando hay varios cambios, cada porcentaje se aplica al valor que dejó el anterior. Convierte cada cambio en un factor y multiplícalos.',
    uses: ['Resolver promociones con descuentos adicionales.', 'Combinar una rebaja con un recargo.', 'Identificar la variación real después de una subida y una bajada.'],
    formula: 'Valor final = Valor inicial × factor 1 × factor 2',
    steps: ['Identifica el valor inicial.', 'Convierte cada aumento o descuento en su factor.', 'Multiplica el valor inicial por todos los factores.', 'Compara el resultado con el valor inicial.'],
    example: { title: 'Un descuento y un envío', text: 'Unos audífonos cuestan S/ 200. Tienen un 25 % de descuento y un recargo de envío del 10 % sobre el precio rebajado.', calculations: ['Después del descuento: 200 × 0,75 = S/ 150', 'Con el envío: 150 × 1,10 = S/ 165'], result: 'Pagas S/ 165 en total.' },
    tip: 'Subir y bajar el mismo porcentaje no devuelve siempre el precio original. Una entrada de S/ 100 que sube 30 % y baja 30 % termina en 100 × 1,30 × 0,70 = S/ 91: un descuento neto del 9 %.'
  }
];

export const formulas = [
  { type: 'Aumento simple', symbol: '+', color: 'blue', formula: 'Vf = Vi × (1 + A / 100)', meaning: 'Suma el aumento al 100 % inicial.', example: 'Un pasaje de S/ 50 sube 20 %: 50 × 1,20 = S/ 60.' },
  { type: 'Descuento simple', symbol: '−', color: 'green', formula: 'Vf = Vi × (1 − D / 100)', meaning: 'Resta el descuento al 100 % inicial.', example: 'Una casaca de S/ 200 tiene 30 % de descuento: 200 × 0,70 = S/ 140.' },
  { type: 'Variación porcentual', symbol: '%', color: 'purple', formula: 'Variación = ((Vf − Vi) / Vi) × 100 %', meaning: 'Compara el cambio con la cantidad inicial. Un resultado negativo indica una reducción.', example: 'Si un precio pasa de S/ 80 a S/ 60: ((60 − 80) / 80) × 100 % = −25 %.' },
  { type: 'Dos aumentos sucesivos', symbol: '+', color: 'blue', formula: 'Au = A₁ + A₂ + (A₁ × A₂ / 100)', meaning: 'Au es el porcentaje de aumento único equivalente.', example: 'Subir 15 % y luego 20 % equivale a 15 + 20 + 3 = 38 % de aumento.' },
  { type: 'Dos descuentos sucesivos', symbol: '−', color: 'green', formula: 'Du = D₁ + D₂ − (D₁ × D₂ / 100)', meaning: 'Du es el porcentaje de descuento único equivalente.', example: 'Descontar 15 % y luego 20 % equivale a 15 + 20 − 3 = 32 % de descuento.' },
  { type: 'Aumento y descuento', symbol: '%', color: 'purple', formula: 'Vf = Vi × (1 + A / 100) × (1 − D / 100)', meaning: 'Multiplica los factores de los dos cambios.', example: 'Subir 25 % y bajar 20 %: 1,25 × 0,80 = 1. La variación neta es 0 %.' }
];

export const worksheets = [
  {
    title: 'Hoja de trabajo', subtitle: 'Pon en práctica los factores y descubre qué ocurre con cada precio.',
    exercises: [
      { title: 'La bicicleta', tag: 'Aumentos sucesivos', text: 'Un comerciante compra una bicicleta a S/ 450. Para venderla en su tienda, primero le aumenta un 20 % por concepto de ganancia y, sobre ese nuevo precio, debe aplicar el 18 % de IGV. ¿Cuál será el precio final de venta al público?', steps: ['Precio con ganancia: 450 × 1,20 = S/ 540.', 'Precio con IGV: 540 × 1,18 = S/ 637,20.'], result: 'El precio final es S/ 637,20.' },
      { title: 'La laptop', tag: 'Descuentos sucesivos', text: 'Una laptop tiene un precio de lista de S/ 3 200. Por campaña escolar tiene un 25 % de descuento y, si se paga con tarjeta de la tienda, recibe un 10 % adicional sobre el precio rebajado. ¿Cuánto se pagará finalmente y cuánto dinero se ahorró en total?', steps: ['Primera rebaja: 3 200 × 0,75 = S/ 2 400.', 'Segunda rebaja: 2 400 × 0,90 = S/ 2 160.', 'Ahorro: 3 200 − 2 160 = S/ 1 040.'], result: 'Pagas S/ 2 160 y ahorras S/ 1 040.' },
      { title: 'La oferta del televisor', tag: 'Aumento y descuento', text: 'Antes de un evento de compras por internet, una tienda incrementa el precio de un televisor en un 30 %. El día del evento anuncia un 30 % de descuento sobre el nuevo precio. Si costaba originalmente S/ 2 000, ¿cuál es el precio el día del evento y qué variación porcentual neta ocurrió?', steps: ['Después del aumento: 2 000 × 1,30 = S/ 2 600.', 'Después del descuento: 2 600 × 0,70 = S/ 1 820.', 'Variación: ((1 820 − 2 000) / 2 000) × 100 % = −9 %.'], result: 'El precio es S/ 1 820: un descuento neto del 9 %.' },
      { title: 'El precio del acero', tag: 'Aumentos sucesivos', text: 'Durante el primer trimestre, el precio del acero subió un 15 % y en el segundo volvió a subir un 20 % respecto al precio anterior. ¿A qué aumento porcentual único equivalen estas dos subidas?', steps: ['Factores: 1,15 y 1,20.', 'Factor total: 1,15 × 1,20 = 1,38.', 'Aumento único: (1,38 − 1) × 100 % = 38 %.'], result: 'Equivalen a un aumento del 38 %.' }
    ]
  },
  {
    title: 'Hoja de refuerzo', subtitle: 'Afianza lo aprendido con situaciones nuevas. Tómate tu tiempo.',
    exercises: [
      { title: 'El sueldo inicial', tag: 'Encontrar el valor inicial', text: 'Tras recibir un incremento salarial del 15 % por desempeño, una ingeniera pasa a ganar S/ 4 140 mensuales. ¿Cuál era su sueldo antes del aumento y cuántos soles adicionales recibe ahora?', steps: ['El sueldo final equivale a 1,15 veces el inicial.', 'Sueldo inicial: 4 140 ÷ 1,15 = S/ 3 600.', 'Incremento: 4 140 − 3 600 = S/ 540.'], result: 'Antes ganaba S/ 3 600 y ahora recibe S/ 540 adicionales.' },
      { title: '¿Qué oferta conviene?', tag: 'Comparar descuentos', text: 'Unas zapatillas de S/ 280 tienen dos opciones de oferta: A ofrece un descuento único del 35 % y B ofrece dos descuentos sucesivos del 20 % y 20 %. ¿Cuál conviene más y por cuántos soles de diferencia?', steps: ['Opción A: 280 × 0,65 = S/ 182.', 'Opción B: 280 × 0,80 × 0,80 = S/ 179,20.', 'Diferencia: 182 − 179,20 = S/ 2,80.'], result: 'Conviene la opción B: ahorras S/ 2,80 más que con A.' },
      { title: 'Una cena con descuento', tag: 'Descuento y recargo', text: 'Una cena para cuatro personas tiene un costo base de S/ 160. Por ser cliente frecuente te aplican un 15 % de descuento, pero al monto resultante le suman un 10 % por servicio y propina. ¿Cuánto es el monto total a pagar?', steps: ['Con descuento: 160 × 0,85 = S/ 136.', 'Con el recargo: 136 × 1,10 = S/ 149,60.'], result: 'El total a pagar es S/ 149,60.' },
      { title: 'Cambios en una acción', tag: 'Tres cambios sucesivos', text: 'El valor de una acción cae un 20 % el lunes, sube un 25 % el martes y vuelve a caer un 10 % el miércoles. Si empezó valiendo S/ 500, ¿cuál es su valor al cierre del miércoles?', steps: ['Lunes: 500 × 0,80 = S/ 400.', 'Martes: 400 × 1,25 = S/ 500.', 'Miércoles: 500 × 0,90 = S/ 450.'], result: 'Al cierre del miércoles vale S/ 450.' }
    ]
  }
];

export const questions = [
  { points: 6, correct: 0, title: 'El precio de una mesa', text: 'Un taller de fabricación produce una mesa cuyo costo de producción es S/ 250. Para venderla a un distribuidor, le aplica un aumento del 24 % por margen de utilidad. Sin embargo, el distribuidor debe pagar un 18 % adicional sobre ese monto por concepto de IGV. ¿Cuál es el precio final que paga el distribuidor y cuál es el porcentaje total de aumento respecto al costo de producción?', options: ['S/ 365,80 y 46,32 %', 'S/ 355,90 y 34,6 %', 'S/ 208,80 y 16,54 %', 'S/ 522 y 34,15 %'] },
  { points: 7, correct: 0, title: 'Una tablet en promoción', text: 'En una tienda de tecnología, una tablet de S/ 1 200 tiene un 20 % de descuento por aniversario. Si el cliente paga con una billetera digital afiliada, recibe un 15 % de descuento adicional sobre el precio ya rebajado. ¿Cuánto paga finalmente el cliente y cuánto dinero ahorra en total?', options: ['Paga S/ 816 y ahorra S/ 384', 'Paga S/ 801 y ahorra S/ 84', 'Paga S/ 752 y ahorra S/ 237', 'Paga S/ 576 y ahorra S/ 304'] },
  { points: 7, correct: 0, title: 'La entrada al parque', text: 'El precio de entrada a un parque recreativo se incrementa en un 25 % durante la temporada alta. Al terminar la temporada, se aplica un 20 % de descuento sobre el precio de temporada alta para incentivar las visitas. Si la entrada costaba S/ 40 antes de la temporada alta, ¿cuál es su precio final y cuál es la variación porcentual neta respecto al precio inicial?', options: ['Precio S/ 40 y variación 0 %', 'Precio S/ 50 y variación 1 %', 'Precio S/ 37 y variación 0,12 %', 'Precio S/ 47 y variación 3 %'] }
];

export const resultMessages = [
  { title: '¡Tu aventura continúa!', text: 'Cada intento es una oportunidad para aprender. Repasa los temas y vuelve a probar. ¡Tú puedes!', symbol: 'seed' },
  { title: '¡Ya diste el primer paso!', text: 'Ya tienes un primer acierto. Sigue practicando y descubre qué puedes mejorar en tu siguiente intento.', symbol: 'star' },
  { title: '¡Vas por muy buen camino!', text: 'Acertaste dos de tres preguntas. ¡Buen trabajo! Un poco más de práctica y estarás listo para el siguiente reto.', symbol: 'star' },
  { title: '¡Lo conseguiste!', text: 'Acertaste todas las preguntas. ¡Excelente! Ya sabes cómo aplicar aumentos y descuentos. Celebremos lo aprendido.', symbol: 'trophy' }
];
