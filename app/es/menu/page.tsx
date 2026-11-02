import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menus digitales interactivos — kakao.ink",
  description:
    "Menus digitales con fotos por producto, extras con precio en vivo y actualizaciones en segundos.",
};

export default function MenuServicePageEs() {
  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Servicio 01 · Especialidad
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            Un menu que la gente realmente puede ver.
          </h1>
          <p>
            No es un PDF en pantalla. Cada producto tiene foto y descripcion,
            los extras actualizan el total en vivo y puedes editar todo en
            segundos desde tu telefono.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#contact">
              Pedir cotizacion
            </a>
            <Link className="btn quiet" href="/es/websites">
              Ver sitios web
            </Link>
          </div>
          <p className="hero-note">
            Respuesta en un dia habil · Entrega en una a dos semanas
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="eyebrow">Que cambia</div>
          <h2 className="h2">Ventajas de pasar a menu digital.</h2>
          <div className="grid2" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Cambios al instante</h4>
              <p>
                Sube precio, pausa producto agotado o agrega promo del dia sin
                reimprimir nada.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Mejor experiencia para el cliente</h4>
              <p>
                Ingredientes, alergenos y opciones en un solo lugar para que el
                pedido sea mas rapido y seguro.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Menos costo operativo</h4>
              <p>
                Sin impresiones repetidas, sin menus desactualizados, sin
                correcciones manuales.
              </p>
            </div>
            <div className="card" style={{ background: "var(--travertine)" }}>
              <h4>Listo para redes y QR</h4>
              <p>
                Un enlace para mesas, bio, anuncios y bolsas de entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--cornflower)",
          borderTop: "var(--stroke)",
          borderBottom: "var(--stroke)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ color: "var(--citron)" }}>
            Incluye
          </div>
          <h2
            className="h2"
            style={{ color: "var(--cream)", textShadow: "4px 4px 0 var(--cocoa)" }}
          >
            Disenado para vender, no solo listar.
          </h2>
          <ul className="checks" style={{ marginTop: "var(--s7)" }}>
            <li>Foto y descripcion para cada producto</li>
            <li>Opciones con precio en vivo</li>
            <li>Filtros por dieta y alergenos</li>
            <li>Diseno adaptado a tu marca, no plantilla generica</li>
            <li>QR y enlace unico para compartir en todos lados</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow">Fotografia</div>
            <h2 className="h2">La imagen del producto, bien resuelta.</h2>
            <p className="lede">
              Podemos fotografiar tus productos reales o generar imagenes AI
              ultra-realistas cuando un shooting no es viable.
            </p>
            <p className="lede">
              El objetivo es que todo el menu se vea consistente y apetecible,
              con calidad de marca.
            </p>
            <div style={{ marginTop: "var(--s6)" }}>
              <a className="btn" href="#contact">
                Preguntar por fotografia
              </a>
            </div>
          </div>
          <div className="card" style={{ background: "var(--citron)", padding: "var(--s7)" }}>
            <h4 style={{ fontSize: "1.6rem" }}>Mantenimiento opcional</h4>
            <p style={{ color: "var(--cocoa)" }}>
              Si quieres, nos quedamos despues del lanzamiento para cambios de
              precio, nuevos productos, especiales de temporada y hosting.
            </p>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Enviamos tu
            <br />
            menu a otro nivel.
          </h2>
          <p>
            Manda lo que tengas: PDF, notas o foto del pizarron. Te regresamos
            plan, precio y calendario en un dia habil.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Menu%20digital%20interactivo"
            >
              Escribir por correo
            </a>
            <a className="btn quiet" href="https://www.instagram.com/kakao.ink/">
              Escribir por Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
