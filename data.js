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
];
