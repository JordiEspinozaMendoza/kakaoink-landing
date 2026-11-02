import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, type Locale, type Service } from "./data";

const t = {
  en: {
    base: "",
    eyebrow: "Our work",
    heading: "Work we're proud of.",
    lede: "Real businesses, real menus, real sites. Here's what we built and why.",
    services: { menu: "Digital menu", websites: "Website", ads: "Social ads", app: "Web app" },
    view: "See case study →",
    all: "See all work",
    challenge: "The challenge",
    solution: "What we did",
    built: "What we built",
    visit: "Visit the site",
    start: "Start a project",
    shots: "Screens",
    ctaHeading: "Want one like this?",
    ctaText: "Tell us what you sell and we'll reply within one business day with a plan and a price.",
  },
  es: {
    base: "/es",
    eyebrow: "Nuestro trabajo",
    heading: "Proyectos de los que estamos orgullosos.",
    lede: "Negocios reales, menús reales, sitios reales. Esto es lo que hicimos y por qué.",
    services: { menu: "Menú digital", websites: "Sitio web", ads: "Anuncios", app: "App web" },
    view: "Ver caso →",
    all: "Ver todos los proyectos",
    challenge: "El reto",
    solution: "Lo que hicimos",
    built: "Lo que construimos",
    visit: "Ver el sitio",
    start: "Iniciar proyecto",
    shots: "Pantallas",
    ctaHeading: "¿Quieres uno así?",
    ctaText: "Cuéntanos qué vendes y te respondemos en un día hábil con un plan y un precio.",
  },
} as const;

const serviceLabel = (s: Service[], l: Locale) =>
  s.map((x) => t[l].services[x]).join(" · ");

export const indexMetadata = (l: Locale): Metadata => ({
  title: t[l].eyebrow,
  description: t[l].lede,
  alternates: { canonical: `${t[l].base}/work` },
});

export function WorkIndex({ locale: l }: { locale: Locale }) {
  return (
    <main>
      <section>
        <div className="wrap">
          <div className="eyebrow">{t[l].eyebrow}</div>
          <h1 className="h2">{t[l].heading}</h1>
          <p className="lede">{t[l].lede}</p>
          <WorkCards locale={l} />
        </div>
      </section>
    </main>
  );
}

export function HomeWork({ locale: l }: { locale: Locale }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="eyebrow">{t[l].eyebrow}</div>
        <h2 className="h2">{t[l].heading}</h2>
        <p className="lede">{t[l].lede}</p>
        <WorkCards locale={l} limit={3} />
        <Link className="btn quiet" href={`${t[l].base}/work`} style={{ marginTop: "var(--s6)" }}>
          {t[l].all}
        </Link>
      </div>
    </section>
  );
}

function WorkCards({ locale: l, limit }: { locale: Locale; limit?: number }) {
  return (
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            {caseStudies.slice(0, limit).map((cs) => (
              <Link
                key={cs.slug}
                href={`${t[l].base}/work/${cs.slug}`}
                className="card"
                style={{ padding: 0, overflow: "hidden", display: "block", textDecoration: "none" }}
              >
                <Image
                  src={cs.cover}
                  alt={cs.client}
                  placeholder="blur"
                  sizes="(max-width: 620px) 100vw, 360px"
                  style={{ width: "100%", height: "auto", borderBottom: "var(--stroke)" }}
                />
                <div style={{ padding: "var(--s5)" }}>
                  <span className="pill">{serviceLabel(cs.services, l)}</span>
                  <h4 style={{ marginTop: "var(--s3)" }}>{cs.client}</h4>
                  <p>{cs[l].summary}</p>
                  <p style={{ marginTop: "var(--s3)", color: "var(--ember)", fontWeight: 600 }}>
                    {t[l].view}
                  </p>
                </div>
              </Link>
            ))}
          </div>
  );
}

export const staticParams = () => caseStudies.map(({ slug }) => ({ slug }));

const find = (slug: string) => caseStudies.find((c) => c.slug === slug) ?? notFound();

export function caseMetadata(slug: string, l: Locale): Metadata {
  const cs = find(slug);
  return {
    title: `${cs.client} — ${cs[l].title}`,
    description: cs[l].summary,
    alternates: { canonical: `${t[l].base}/work/${cs.slug}` },
    openGraph: { images: [{ url: cs.cover.src, width: cs.cover.width, height: cs.cover.height }] },
  };
}

export function CaseStudyView({ slug, locale: l }: { slug: string; locale: Locale }) {
  const cs = find(slug);
  const c = cs[l];
  const shot = { border: "var(--stroke)", borderRadius: "var(--r-lg)", boxShadow: "var(--sticker)", width: "100%", height: "auto" } as const;

  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            {cs.client} · {serviceLabel(cs.services, l)} · {cs.location}
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>{c.title}</h1>
          <p>{c.summary}</p>
          <div className="hero-cta">
            {cs.url && (
              <a className="btn" href={cs.url} target="_blank" rel="noopener noreferrer">
                {t[l].visit}
              </a>
            )}
            <a className="btn quiet" href="#contact">
              {t[l].start}
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Image src={cs.cover} alt={cs.client} placeholder="blur" priority sizes="(max-width: 1120px) 100vw, 1072px" style={shot} />
          <div className="grid2" style={{ marginTop: "var(--s8)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>{t[l].challenge}</h4>
              <p>{c.challenge}</p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>{t[l].solution}</h4>
              <p>{c.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--travertine)", borderTop: "var(--stroke)", borderBottom: "var(--stroke)" }}>
        <div className="wrap">
          <div className="eyebrow">{t[l].built}</div>
          <ul className="checks">
            {c.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">{t[l].shots}</div>
          <div style={{ display: "grid", gap: "var(--s6)" }}>
            {cs.desktop.slice(1).map((img) => (
              <Image key={img.src} src={img} alt={cs.client} placeholder="blur" sizes="(max-width: 1120px) 100vw, 1072px" style={shot} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "var(--s5)", marginTop: "var(--s6)" }}>
            {cs.mobile.map((img) => (
              <Image key={img.src} src={img} alt={cs.client} placeholder="blur" sizes="(max-width: 620px) 50vw, 260px" style={shot} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>{t[l].ctaHeading}</h2>
          <p>{t[l].ctaText}</p>
          <div className="cta-actions">
            <a className="btn" href="mailto:hello@kakao.ink?subject=Project%20with%20kakao.ink">
              hello@kakao.ink
            </a>
            <a className="btn quiet" href="https://www.instagram.com/kakao.ink/">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
