import type { Metadata } from "next";
import Link from "next/link";
import { HomeWork } from "@/app/work/views";

export const metadata: Metadata = {
  title: "kakao.ink — Estudio de diseño para negocios locales",
  description:
    "kakao.ink es un estudio de diseño en Tijuana, MX. Creamos menus digitales, sitios web y anuncios sociales para pequeños negocios.",
};

export default function HomePageEs() {
  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Estudio de diseño · Tijuana, MX
          </span>

          <h1 style={{ marginTop: "var(--s5)" }}>
            Hacemos que los negocios pequeños se vean como marca grande.
          </h1>

          <p>
            Creamos las tres piezas que tus clientes ven antes de llegar:
            menu, sitio web y anuncios. Todo conectado para que la gente vea
            tu producto, confie y compre mas rapido.
          </p>

          <div className="hero-cta">
            <Link className="btn" href="#contact">
              Iniciar proyecto
            </Link>
            <Link className="btn quiet" href="/es/menu">
              Ver menu digital
            </Link>
          </div>

          <div className="svc" id="services">
            <Link className="svc-card lead" href="/es/menu">
              <h3>Menus digitales interactivos</h3>
              <p>
                Nuestro servicio principal. Fotos por producto, extras con
                precio en vivo y cambios inmediatos desde tu telefono.
              </p>
              <span className="go">Ver servicio →</span>
            </Link>

            <Link className="svc-card" href="/es/websites">
              <h3>Sitios web y landing pages</h3>
              <p>
                Sitios rapidos, claros y hechos para celular primero. Tu oferta
                bien explicada sin parecer folleto.
              </p>
              <span className="go">Ver servicio →</span>
            </Link>

            <Link className="svc-card" href="/es/ads">
              <h3>Anuncios para redes sociales</h3>
              <p>
                Creativos organicos y pagados usando tus productos reales,
                conectados al menu o al sitio donde cierras la venta.
              </p>
              <span className="go">Ver servicio →</span>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="eyebrow">Por que importa</div>
          <h2 className="h2">Hoy la gente decide antes de llegar.</h2>
          <p className="lede">
            Si alguien no puede entender que vendes en 20 segundos, se va con
            otra opcion. Un menu claro, un sitio rapido y anuncios consistentes
            quitan friccion y suben conversion.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Tu producto se entiende al instante</h4>
              <p>
                Fotos reales, descripciones cortas y precio visible para que no
                haya dudas antes de ordenar.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Tu marca se ve consistente</h4>
              <p>
                Mismo estilo en menu, web y anuncios. Eso hace que un negocio
                pequeno se vea serio y confiable.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Vendes mas con menos esfuerzo</h4>
              <p>
                Menos preguntas repetidas, pedidos mas rapidos y mayor ticket
                promedio cuando la gente ve bien lo que va a comprar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--rose)",
          borderTop: "var(--stroke)",
          borderBottom: "var(--stroke)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow" style={{ color: "var(--cocoa)" }}>
            Como trabajamos
          </div>
          <h2 className="h2">Simple y rapido.</h2>
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <span className="num">01</span>
              <h4>Nos escribes</h4>
              <p>
                Nos cuentas que vendes y que ya tienes. Respondemos en un dia
                habil con plan y precio.
              </p>
            </div>
            <div className="card">
              <span className="num">02</span>
              <h4>Disenamos</h4>
              <p>
                Primera propuesta, ajustes y cierre. Siempre pensando en
                velocidad, claridad y conversion.
              </p>
            </div>
            <div className="card">
              <span className="num">03</span>
              <h4>Publicamos</h4>
              <p>
                Entrega en una a dos semanas y mantenimiento mensual opcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeWork locale="es" />

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Cuentanos que
            <br />
            vendes.
          </h2>
          <p>
            Manda tu menu, catalogo o una foto de tu negocio. Te respondemos en
            un dia habil con plan, precio y tiempos.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Proyecto%20con%20kakao.ink"
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
