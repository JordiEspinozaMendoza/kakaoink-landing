import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — kakao.ink",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            404
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            This page isn&apos;t on the menu.
          </h1>
          <p>
            Whatever you were looking for, it&apos;s not here — moved,
            renamed, or maybe it never existed. Let&apos;s get you back
            somewhere useful.
          </p>
          <div className="hero-cta">
            <Link className="btn" href="/">
              Back to home
            </Link>
            <Link className="btn quiet" href="/menu">
              See the digital menu
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="eyebrow">Where to next</div>
          <h2 className="h2">A few places to start.</h2>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <Link className="card" href="/menu" style={{ background: "var(--blush)" }}>
              <h4>Digital menus</h4>
              <p>
                See how an interactive menu works — a live demo, right in
                your browser.
              </p>
            </Link>
            <Link className="card" href="/websites" style={{ background: "var(--fog)" }}>
              <h4>Websites</h4>
              <p>
                Landing pages and complete sites built to show what you
                sell.
              </p>
            </Link>
            <Link className="card" href="/ads" style={{ background: "var(--glow)" }}>
              <h4>Social ads</h4>
              <p>
                Feed posts, stories and paid ad sets built from your own
                products.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Still can&apos;t find
            <br />
            what you need?
          </h2>
          <p>
            Send us a message and we&apos;ll point you in the right
            direction — or just tell us what you were trying to do.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Couldn%27t%20find%20a%20page"
            >
              Email the studio
            </a>
            <a className="btn quiet" href="https://www.instagram.com/kakao.ink/">
              Message us on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}