import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitios web — kakao.ink",
  description:
    "Sitios web custom y mobile-first para negocios locales: landing page, sitio base o sitio completo.",
};

export default function WebsitesServicePageEs() {
  return (
    <main>
      <header className="hero blue">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Servicio 02 · Sitios web
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            Un sitio que muestra lo que vendes.
          </h1>
          <p>
            Desde una landing hasta un sitio completo. Todo disenado para que
            tus clientes entiendan tu oferta en segundos, especialmente desde
            celular.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#contact">
              Iniciar proyecto
            </a>
            <a className="btn quiet" href="#what">
              Que construimos
            </a>
          </div>
          <p className="hero-note">
            Respuesta en un dia habil · Sitios en vivo en una a dos semanas
          </p>
        </div>
      </header>

      <section id="what">
        <div className="wrap">
          <div className="eyebrow">Que construimos</div>
          <h2 className="h2">Tres escalas, segun tu necesidad.</h2>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Landing page</h4>
              <p>
                Una pagina para un objetivo claro: recibir mensajes, reservas o
                visitas.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Sitio base</h4>
              <p>
                Inicio, servicios/productos, ubicacion, horarios, contacto y
                enlaces clave.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Sitio completo</h4>
              <p>
                Varias secciones, galeria, formularios y estructura lista para
                crecer sin romperse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--cocoa)",
          borderTop: "var(--stroke)",
          borderBottom: "var(--stroke)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ color: "var(--citron)" }}>
            Por que funciona
          </div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>
            Tu sitio es el primer mostrador de tu negocio.
          </h2>
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Muestra producto real</h4>
              <p>Fotos buenas, precios claros y descripciones directas.</p>
            </div>
            <div className="card">
              <h4>Responde dudas antes del mensaje</h4>
              <p>
                Horarios, mapa, entregas, que incluye cada servicio. Menos ida
                y vuelta por DM.
              </p>
            </div>
            <div className="card">
              <h4>Te encuentran mejor</h4>
              <p>
                Estructura limpia, metadata correcta y rendimiento rapido para
                busquedas locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow">Incluye</div>
            <h2 className="h2">Todo sitio incluye lo esencial.</h2>
            <ul className="checks">
              <li>Diseno custom en tu marca</li>
              <li>Mobile-first y optimizado en velocidad</li>
              <li>Formularios de contacto o reserva</li>
              <li>Mapa, horarios, redes y links de delivery</li>
              <li>SEO basico y estructura escalable</li>
            </ul>
            <div style={{ marginTop: "var(--s6)" }}>
              <a className="btn" href="#contact">
                Cotizar mi sitio
              </a>
            </div>
          </div>
          <div className="card" style={{ background: "var(--citron)", padding: "var(--s7)" }}>
            <h4 style={{ fontSize: "1.6rem" }}>Mejor junto al menu digital</h4>
            <p style={{ color: "var(--cocoa)" }}>
              Si ya tienes menu con nosotros, lo integramos al sitio con misma
              estetica y mismo sistema visual.
            </p>
            <div style={{ marginTop: "var(--s5)" }}>
              <Link className="btn sm quiet" href="/es/menu">
                Ver menus digitales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Hablemos de tu
            <br />
            negocio.
          </h2>
          <p>
            Dinos que vendes, a quien y que ya tienes montado. Te proponemos el
            tamano ideal de sitio con precio y tiempos.
          </p>
          <div className="cta-actions">
            <a className="btn" href="mailto:hello@kakao.ink?subject=Proyecto%20de%20sitio%20web">
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
