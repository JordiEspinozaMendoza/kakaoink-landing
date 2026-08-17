import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites — kakao.ink",
  description:
    "Custom, mobile-first websites for shops, cafés, salons and studios — from a single landing page to a complete site.",
};

export default function WebsitesServicePage() {
  return (
    <main>
      <header className="hero blue">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Service 02 · Websites
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            A site that shows what you sell.
          </h1>
          <p>
            From a single landing page to a complete website — for a shop, a
            cafeteria, a salon, a studio, anyone whose customers need to see the
            product or understand the service before they commit. Built custom,
            mobile first, and fast enough that nobody leaves waiting.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#contact">
              Start a project
            </a>
            <a className="btn quiet" href="#what">
              What we build
            </a>
          </div>
          <p className="hero-note">
            Reply in one business day · Live in one to two weeks
          </p>
        </div>
      </header>

      <section id="what">
        <div className="wrap">
          <div className="eyebrow">What we build</div>
          <h2 className="h2">Three sizes, depending on what you need.</h2>
          <p className="lede">
            Most small businesses don&apos;t need forty pages. They need the
            right ones, saying the right thing, on a phone.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Landing page</h4>
              <p>
                One page that does one job: explain the offer and get the
                message, the booking or the visit. Ideal for a single service, a
                launch or a campaign you&apos;re running ads to.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Homepage &amp; essentials</h4>
              <p>
                Your front door plus the pages people actually look for — what
                you sell, where you are, hours, contact, and your menu or
                catalogue one tap away.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Complete website</h4>
              <p>
                The full thing: product or service pages, gallery, about,
                locations, forms, blog if you want one. Structured so you can
                add to it later without it falling apart.
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
            Why it earns its keep
          </div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>
            Your site is the storefront most people see first.
          </h2>
          <p style={{ color: "#e9c3ae", maxWidth: "58ch" }}>
            Someone searches your name, taps the first result and gives you a
            few seconds. A site that loads slowly, hides the prices or shows
            nothing of what you actually sell sends that person straight back to
            the search results — and to whoever explained themselves better.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Show the product</h4>
              <p>
                Real photos, clear prices, honest descriptions. People commit
                faster when there&apos;s nothing left to imagine.
              </p>
            </div>
            <div className="card">
              <h4>Answer before they ask</h4>
              <p>
                Hours, location, parking, delivery, what&apos;s included. Every
                question answered on the page is a message you don&apos;t have
                to reply to.
              </p>
            </div>
            <div className="card">
              <h4>Be findable</h4>
              <p>
                Clean structure, real page titles, proper metadata and maps, so
                you turn up when someone searches what you sell nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow">Included</div>
            <h2 className="h2">What comes with every site.</h2>
            <ul className="checks">
              <li>Custom design in your brand — never a bought template</li>
              <li>Mobile first, because that&apos;s where your visitors are</li>
              <li>
                Product or service photography, shot or AI-generated where a
                shoot isn&apos;t practical
              </li>
              <li>Contact, booking or enquiry forms that land in your inbox</li>
              <li>Maps, hours, social links and delivery platform links</li>
              <li>
                Basic SEO setup and fast loading on a normal phone connection
              </li>
              <li>Your interactive menu built in, if you have one with us</li>
            </ul>
            <div style={{ marginTop: "var(--s6)" }}>
              <a className="btn" href="#contact">
                Ask what yours would cost
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{ background: "var(--citron)", padding: "var(--s7)" }}
          >
            <h4 style={{ fontSize: "1.6rem" }}>Works better with the menu</h4>
            <p style={{ color: "var(--cocoa)" }}>
              If we&apos;ve built your interactive menu, it drops straight into
              the site — same colors, same photography, same link. Visitors go
              from &quot;what is this place&quot; to &quot;what do they
              have&quot; without ever leaving the page.
            </p>
            <div style={{ marginTop: "var(--s5)" }}>
              <Link className="btn sm quiet" href="/menu">
                See digital menus →
              </Link>
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
            Who we build for
          </div>
          <h2 className="h2">
            If your customer needs to see it, we can build it.
          </h2>
          <div className="grid4" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Food &amp; drink</h4>
              <p>
                Restaurants, cafés, ice cream shops, bakeries, food trucks and
                ghost kitchens.
              </p>
            </div>
            <div className="card">
              <h4>Shops</h4>
              <p>
                Boutiques, florists, bookshops and makers with a catalogue worth
                browsing.
              </p>
            </div>
            <div className="card">
              <h4>Services</h4>
              <p>
                Salons, studios, clinics, trainers and anyone booked by
                appointment.
              </p>
            </div>
            <div className="card">
              <h4>Small brands</h4>
              <p>
                Producers and local labels who need one honest page before
                anything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <div>
            <h3>Maintenance, if you want it.</h3>
            <p>
              Monthly upkeep for your site: content and price updates, new
              photos, seasonal changes, hosting, backups, security and fixes.
              You send a message, we handle it — no ticket system.
            </p>
          </div>
          <a className="btn secondary" href="#contact">
            Ask about maintenance
          </a>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Tell us about
            <br />
            your business.
          </h2>
          <p>
            What you sell, who buys it and what you have already. We&apos;ll
            reply within one business day with the right size of site, a price
            and a timeline.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Website%20project"
            >
              Email the studio
            </a>
            <a
              className="btn quiet"
              href="https://www.instagram.com/kakao.ink/"
            >
              Message us on Instagram
            </a>
          </div>
          <p style={{ fontSize: "0.8rem", marginTop: "var(--s5)" }}>
            Reply in one business day · Most sites live in one to two weeks
          </p>
        </div>
      </section>
    </main>
  );
}
