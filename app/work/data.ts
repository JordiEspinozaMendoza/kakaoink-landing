import type { StaticImageData } from "next/image";
import bgHome from "@/public/work/bobas-gups/home.webp";
import bgMenu from "@/public/work/bobas-gups/menu.webp";
import bgMobile from "@/public/work/bobas-gups/mobile.webp";
import bgMobileMenu from "@/public/work/bobas-gups/mobile-menu.webp";
import flHome from "@/public/work/fidlat/home.webp";
import flHow from "@/public/work/fidlat/how.webp";
import flMobile from "@/public/work/fidlat/mobile.webp";
import shHome from "@/public/work/shelly/home.webp";
import shProducts from "@/public/work/shelly/products.webp";
import shEngine from "@/public/work/shelly/engine.webp";
import shMobile from "@/public/work/shelly/mobile.webp";

export type Locale = "en" | "es";
export type Service = "menu" | "websites" | "ads" | "app";

type Copy = {
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  built: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  location: string;
  services: Service[];
  year: number;
  url?: string;
  cover: StaticImageData;
  desktop: StaticImageData[];
  mobile: StaticImageData[];
  en: Copy;
  es: Copy;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fidlat",
    client: "fidlat",
    location: "Tijuana, Baja California",
    services: ["websites", "app"],
    year: 2026,
    url: "https://fidlat.com",
    cover: flHome,
    desktop: [flHome, flHow],
    mobile: [flMobile],
    en: {
      title: "The stamp card, now in the phone's wallet.",
      summary:
        "Website and web platform for a digital loyalty card service for local businesses.",
      challenge:
        "Paper stamp cards get lost and loyalty apps nobody downloads. fidlat needed a way for barbershops, cafés and gyms to run a loyalty program their customers would actually keep.",
      solution:
        "We designed and built the site and the platform behind it: loyalty cards that live in Apple Wallet and Google Wallet, a dashboard for the business and an online store, all in one place.",
      built: [
        "Landing page with an interactive stamp card demo",
        "Stamp and points programs as Apple Wallet and Google Wallet passes",
        "Staff scanning from any phone or computer camera",
        "Messages and campaigns sent straight to the wallet card",
        "Online store with pickup and delivery, paid through Stripe",
        "Spanish and English",
      ],
    },
    es: {
      title: "La tarjeta de sellos, ahora en la cartera del celular.",
      summary:
        "Sitio web y plataforma para un servicio de tarjetas de lealtad digitales para negocios locales.",
      challenge:
        "Las tarjetas de papel se pierden y nadie descarga otra app. fidlat necesitaba que barberías, cafeterías y gimnasios tuvieran un programa de lealtad que sus clientes sí conservaran.",
      solution:
        "Diseñamos y construimos el sitio y la plataforma detrás: tarjetas de lealtad que viven en Apple Wallet y Google Wallet, un panel para el negocio y una tienda en línea, todo en un solo lugar.",
      built: [
        "Landing con demo interactivo de tarjeta de sellos",
        "Programas de sellos y puntos como pases de Apple Wallet y Google Wallet",
        "Escaneo desde la cámara de cualquier celular o computadora",
        "Mensajes y campañas directo a la tarjeta en la cartera",
        "Tienda en línea con recoger y envío a domicilio, pagos con Stripe",
        "Español e inglés",
      ],
    },
  },
  {
    slug: "shelly",
    client: "Comercializadora Shelly",
    location: "Tijuana, Baja California",
    services: ["websites"],
    year: 2026,
    url: "https://shelly-jet.vercel.app",
    cover: shHome,
    desktop: [shHome, shProducts, shEngine],
    mobile: [shMobile],
    en: {
      title: "Diesel parts at distributor price, now online.",
      summary:
        "Website for a diesel parts distributor serving trucking fleets in Tijuana since 2007.",
      challenge:
        "Shelly has sold diesel parts to transport companies since 2007, but had no website showing what they carry. Fleet managers had to call or visit just to find out whether a part was in stock.",
      solution:
        "We built a site that works like a catalogue and a counter in one: every product line at a glance, an interactive engine to find parts by zone, both branches on a map, and every question going straight to WhatsApp.",
      built: [
        "Product catalogue by category: lubricants, filters, urea, repair parts",
        "Interactive engine (Detroit Serie 60, Cummins ISX15) with parts by zone",
        "Quotes through WhatsApp from every section",
        "Two branches with map, hours and directions",
        "Brands they carry and a page for suppliers",
      ],
    },
    es: {
      title: "Refacciones diésel a precio de distribuidor, ahora en línea.",
      summary:
        "Sitio web para un distribuidor de refacciones diésel que surte a transportistas en Tijuana desde 2007.",
      challenge:
        "Shelly vende refacciones diésel a empresas de transporte desde 2007, pero no tenía un sitio que mostrara lo que maneja. Los clientes tenían que llamar o ir a la sucursal solo para saber si tenían una pieza.",
      solution:
        "Hicimos un sitio que funciona como catálogo y mostrador a la vez: todas sus líneas de producto a la vista, un motor interactivo para encontrar piezas por zona, sus dos sucursales en mapa y cada duda directo a WhatsApp.",
      built: [
        "Catálogo por categoría: lubricantes, filtros, urea, media reparación",
        "Motor interactivo (Detroit Serie 60, Cummins ISX15) con piezas por zona",
        "Cotizaciones por WhatsApp desde cada sección",
        "Dos sucursales con mapa, horarios y cómo llegar",
        "Marcas que distribuyen y sección para proveedores",
      ],
    },
  },
  {
    slug: "bobas-gups",
    client: "Boba's Gups",
    location: "Tuxtepec, Oaxaca",
    services: ["websites", "menu"],
    year: 2026,
    url: "https://www.bobasgups.com.mx",
    cover: bgHome,
    desktop: [bgHome, bgMenu],
    mobile: [bgMobile, bgMobileMenu],
    en: {
      title: "A site as craveable as the bobas.",
      summary:
        "Website and digital menu for a bubble tea shop in downtown Tuxtepec, Oaxaca.",
      challenge:
        "Boba's Gups had no website and no menu online. Customers found them through social media and had to message to ask for flavors, prices and hours before ordering.",
      solution:
        "We built their first website and a full digital menu around the brand's pug mascot: every drink with its own photo, price and detail page, and a straight line from craving to a WhatsApp order.",
      built: [
        "Homepage with best sellers, hours and delivery info",
        "Digital menu by series, with a detail page per drink",
        "One-tap ordering through WhatsApp",
        "Digital loyalty card: 5 stamps, 25% off",
        "Mobile first, built for phones",
      ],
    },
    es: {
      title: "Un sitio tan antojable como sus bobas.",
      summary:
        "Sitio web y menú digital para una tienda de bubble tea en el centro de Tuxtepec, Oaxaca.",
      challenge:
        "Boba's Gups no tenía sitio web ni menú en línea. Sus clientes los encontraban en redes y tenían que escribir para preguntar sabores, precios y horarios antes de pedir.",
      solution:
        "Creamos su primer sitio y un menú digital completo alrededor de su mascota pug: cada bebida con foto, precio y ficha propia, y un camino directo del antojo al pedido por WhatsApp.",
      built: [
        "Inicio con los más pedidos, horarios y servicio a domicilio",
        "Menú digital por series, con ficha por bebida",
        "Pedidos en un toque por WhatsApp",
        "Tarjeta de lealtad digital: 5 sellos, 25% de descuento",
        "Hecho para celular primero",
      ],
    },
  },
];
