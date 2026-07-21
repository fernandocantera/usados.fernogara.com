// ============================================================
//  Productos en venta — Liquidación de oficina
//
//  Para editar el catálogo, tocá solo este archivo:
//   - Cambiar un precio  -> editá "precio" (en pesos, sin puntos).
//   - Vender una unidad  -> bajá "cantidad" (4 -> 3 -> ...).
//   - Producto agotado   -> poné "vendido: true" (aparece el sello).
//   - Link de pago       -> reemplazá el "#" de "pagoUrl" por el link de Mercado Pago.
//
//  Guardá y hacé "git push" (o editá directo en GitHub). El sitio se
//  actualiza solo en ~1 minuto.
// ============================================================

const ITEMS = [
  { n:1, nombre:"Silla de escritorio", categoria:"mobiliario", estado:"muy-bueno",
    spec:"Silla ejecutiva con ruedas, respaldo alto. Hay 4 iguales disponibles.",
    precio:48000, cantidad:4, vendido:false, pagoUrl:"#",
    fotos:["fotos/01-silla-1.jpg","fotos/01-silla-2.jpg"] },

  { n:2, nombre:"Escritorio 1,00 × 0,82 m", categoria:"mobiliario", estado:"muy-bueno",
    spec:"Escritorio de madera y hierro. Hay 4 iguales disponibles.",
    precio:60000, cantidad:4, vendido:false, pagoUrl:"#",
    fotos:["fotos/02-escritorio-1.jpg","fotos/02-escritorio-2.jpg"] },

  { n:3, nombre:"Mesa desayunador + 4 banquetas", categoria:"mobiliario", estado:"muy-bueno",
    spec:"Mesa alta de 2,30 × 1,00 m con 4 banquetas a juego. Se vende como juego.",
    precio:240000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/03-desayunador.jpg"] },

  { n:4, nombre:'Monitor 24" Samsung', categoria:"tecnologia", estado:"muy-bueno",
    spec:"Monitor Samsung de 24 pulgadas, Full HD.",
    precio:70000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/04-monitor-1.jpg","fotos/04-monitor-2.jpg","fotos/04-monitor-3.jpg"] },

  { n:5, nombre:"Impresora láser multifunción", categoria:"tecnologia", estado:"muy-bueno",
    spec:"HP Laser MFP 137fnw: imprime, copia y escanea, con wifi.",
    precio:190000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/05-impresora.jpg"] },

  { n:6, nombre:"Horno eléctrico", categoria:"electrodomesticos", estado:"muy-bueno",
    spec:"Horno eléctrico de mesada.",
    precio:70000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/06-horno.jpg"] },

  { n:7, nombre:"Microondas", categoria:"electrodomesticos", estado:"muy-bueno",
    spec:"Microondas de oficina.",
    precio:45000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/07-microondas.jpg"] },

  { n:8, nombre:"Cafetera de filtro", categoria:"electrodomesticos", estado:"muy-bueno",
    spec:"Cafetera de filtro con jarra.",
    precio:28000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/08-cafetera.jpg"] },

  { n:9, nombre:"Tostadora", categoria:"electrodomesticos", estado:"muy-bueno",
    spec:"Tostadora eléctrica.",
    precio:28000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/09-tostadora.jpg"] },

  // --- Equipamiento instalado (el comprador coordina desmontaje y retiro) ---

  { n:10, nombre:"Aire acondicionado split", categoria:"electrodomesticos", estado:"muy-bueno",
    spec:"Equipo split, frío/calor. Se entrega instalado; el comprador coordina el desmontaje y retiro.",
    precio:180000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/10-aire-1.jpg","fotos/10-aire-2.jpg"] },

  { n:11, nombre:"Panel divisor de cocina", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Panel divisor con estructura metálica y lamas. Fijo: se desinstala para retirar.",
    precio:90000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/11-panel-cocina-1.jpg","fotos/11-panel-cocina-2.jpg"] },

  { n:12, nombre:"Panel divisor de escalera (planta baja)", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Panel divisor de lamas de madera junto a la escalera. Se desinstala para retirar.",
    precio:70000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/12-panel-escalera-pb.jpg"] },

  { n:13, nombre:"Panel divisor de puestos de trabajo", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Panel separador de estaciones de trabajo. Se desinstala para retirar.",
    precio:60000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/13-panel-puestos.jpg"] },

  { n:14, nombre:"Panel divisor de escalera (planta alta)", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Panel divisor de lamas de madera, planta alta. Se desinstala para retirar.",
    precio:60000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/14-panel-escalera-pa.jpg"] },

  { n:15, nombre:"Cortinas (planta alta)", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Cortinas de planta alta. Se retiran desde su riel.",
    precio:45000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/15-cortinas-pa.jpg"] },

  { n:16, nombre:"Estanterías de madera (planta alta)", categoria:"mobiliario", estado:"muy-bueno",
    spec:"Estantes de madera de planta alta. Se desmontan de la pared.",
    precio:40000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/16-estanterias-pa.jpg"] },

  { n:17, nombre:"Estantería de madera (planta baja)", categoria:"mobiliario", estado:"muy-bueno",
    spec:"Estante de madera de planta baja. Se desmonta de la pared.",
    precio:30000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/17-estanteria-pb.jpg"] },

  { n:18, nombre:"Tablero eléctrico", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Tablero con térmicas y disyuntor. La desinstalación la hace un electricista.",
    precio:50000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/18-tablero.jpg"] },

  { n:19, nombre:"Artefacto de iluminación", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Artefacto de iluminación de planta alta. La desinstalación la hace un electricista.",
    precio:25000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/19-iluminacion.jpg"] },

  { n:20, nombre:"Cortina (planta baja)", categoria:"instalaciones", estado:"muy-bueno",
    spec:"Cortina de planta baja. Se retira desde su riel.",
    precio:22000, cantidad:1, vendido:false, pagoUrl:"#",
    fotos:["fotos/20-cortina-pb.jpg"] },
];
