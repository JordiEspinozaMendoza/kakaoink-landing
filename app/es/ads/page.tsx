import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anuncios sociales — kakao.ink",
  description:
    "Creativos para feed, historias y campanas pagadas que conectan con tu menu y tu sitio para cerrar mejor.",
};

export default function AdsServicePageEs() {
  return (
    <main>
      <header className="hero sun">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Servicio 03 · Anuncios sociales
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            Anuncios que se ven como parte de tu marca.
          </h1>
          <p>
            Creamos piezas para feed, stories y pauta pagada con tus productos
            reales. Todo apunta a un destino que convierte: tu menu digital,
            tu sitio o tu perfil.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#contact">
              Iniciar proyecto
            </a>
            <a className="btn quiet" href="#what">
              Que hacemos
            </a>
          </div>
          <p className="hero-note">
            Respuesta en un dia habil · Primer set en una a dos semanas
          </p>
        </div>
      </header>

      <section id="what">
        <div className="wrap">
          <div className="eyebrow">Entregables</div>
          <h2 className="h2">Piezas con objetivo claro.</h2>
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Posts para feed</h4>
              <p>
                Series de piezas para que tu perfil se vea intencional y
                ordenado.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Stories y reels covers</h4>
              <p>
                Formato vertical para especiales, nuevos productos y horarios.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Sets de pauta pagada</h4>
              <p>
                Variaciones por objetivo y placement con copy y links listos.
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
            Sistema completo
          </div>
          <h2
            className="h2"
            style={{ color: "var(--cream)", textShadow: "4px 4px 0 var(--cocoa)" }}
          >
            Un anuncio solo funciona si aterriza bien.
          </h2>
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Anuncio → menu</h4>
              <p>
                Ven producto, tocan y llegan al item con foto, opciones y
                precio.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm" href="/es/menu">
                  Menus digitales →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Anuncio → sitio</h4>
              <p>
                Ideal para reservas, catalogos y servicios que requieren mas
                contexto.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm secondary" href="/es/websites">
                  Servicios web →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Anuncio → perfil</h4>
              <p>
                Para alcance local y recordacion cuando no buscas venta inmediata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow">Operacion</div>
            <h2 className="h2">Lo publicas tu, o lo operamos nosotros.</h2>
            <ul className="checks">
              <li>
                <strong>Solo diseno</strong> — entregamos piezas finales con
                copy sugerido
              </li>
              <li>
                <strong>Diseno y operacion</strong> — programamos, monitoreamos
                y reportamos lo que si funciono
              </li>
              <li>Todas las piezas e imagenes se quedan contigo</li>
              <li>Tu pagas pauta directo a la plataforma, sin markup</li>
            </ul>
            <div style={{ marginTop: "var(--s6)" }}>
              <a className="btn" href="#contact">
                Pedir cotizacion
              </a>
            </div>
          </div>
          <div className="card" style={{ background: "var(--citron)", padding: "var(--s7)" }}>
            <h4 style={{ fontSize: "1.6rem" }}>Mantenimiento mensual</h4>
            <p style={{ color: "var(--cocoa)" }}>
              Renovamos creativos por temporada, lanzamos ofertas nuevas y
              evitamos fatiga publicitaria con actualizaciones constantes.
            </p>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Hagamos que tus
            <br />
            productos se vean.
          </h2>
          <p>
            Cuentanos que vendes y que quieres que la gente haga al verlo.
            Respondemos en un dia habil con plan y precio.
          </p>
          <div className="cta-actions">
            <a className="btn" href="mailto:hello@kakao.ink?subject=Proyecto%20de%20anuncios%20sociales">
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
