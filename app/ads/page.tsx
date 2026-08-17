import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social ads — kakao.ink",
  description:
    "Feed posts, stories and paid ad sets built from your own products, matching your menu and website so the whole business looks like one brand.",
};

export default function AdsServicePage() {
  return (
    <main>
      <header className="hero sun">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Service 03 · Social ads
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            Ads that look like the rest of your brand.
          </h1>
          <p>
            Feed posts, stories and paid ad sets built from your own products
            — and pointed at somewhere worth landing: your interactive menu,
            your website, or your profile. Same colors, same photography,
            same voice, so the whole thing feels like one business instead of
            three.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#contact">
              Start a project
            </a>
            <a className="btn quiet" href="#what">
              What we make
            </a>
          </div>
          <p className="hero-note">
            Reply in one business day · First set in one to two weeks
          </p>
        </div>
      </header>

      <section id="what">
        <div className="wrap">
          <div className="eyebrow">What we make</div>
          <h2 className="h2">The pieces, and what each one is for.</h2>
          <p className="lede">
            Not &quot;content&quot; for its own sake. Each format has a job:
            get noticed, get remembered, or get the tap.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>Feed posts</h4>
              <p>
                Square and vertical posts of your products, designed as a set
                so your grid looks intentional instead of assembled at
                midnight.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Stories &amp; reels covers</h4>
              <p>
                Vertical pieces for daily specials, sold-out notices, new
                items and opening hours — quick to post, still on brand.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Paid ad sets</h4>
              <p>
                Several versions of one offer, sized for Meta and TikTok
                placements, with the copy and the landing link already
                sorted.
              </p>
            </div>
            <div className="card" style={{ background: "var(--travertine)" }}>
              <h4>Product photography</h4>
              <p>
                Shot with us, or ultra-realistic AI imagery when a shoot
                isn&apos;t practical — reused across the ads, the menu and
                the site.
              </p>
            </div>
            <div className="card" style={{ background: "var(--rose)" }}>
              <h4>Editable templates</h4>
              <p>
                The same designs handed over as templates you can edit
                yourself for the everyday posts between campaigns.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Monthly batches</h4>
              <p>
                A set of posts and one ad campaign per month, planned around
                your specials, so you&apos;re never posting from scratch.
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
            Why it works together
          </div>
          <h2
            className="h2"
            style={{ color: "var(--cream)", textShadow: "4px 4px 0 var(--cocoa)" }}
          >
            An ad is only as good as where it lands.
          </h2>
          <p style={{ color: "var(--cream)", maxWidth: "58ch", fontWeight: 500 }}>
            Most small-business ads fail at the last step: someone taps a
            beautiful photo and arrives at a profile with no prices, or a PDF
            they can&apos;t read. The interest is gone in a second. When the
            ad, the menu and the site are built by the same studio, the tap
            goes somewhere that finishes the job.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Ads → your menu</h4>
              <p>
                They see the dish, tap, and land on that exact item with its
                photo, options and price. Nothing to hunt for.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm" href="/menu">
                  Digital menus →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Ads → your website</h4>
              <p>
                For bookings, catalogues and anything that needs more
                explaining than a caption can carry.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm secondary" href="/websites">
                  Website services →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Ads → your profile</h4>
              <p>
                When the goal is being remembered locally rather than an
                immediate sale, and the feed has to look the part.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <div className="eyebrow">How it runs</div>
            <h2 className="h2">You post it, or we do.</h2>
            <p className="lede">
              Two ways to work, depending on how much you want on your plate.
            </p>
            <ul className="checks">
              <li>
                <strong>Design only</strong> — we deliver the finished
                pieces, sized and captioned, and you publish them yourself
              </li>
              <li>
                <strong>Design and run</strong> — we schedule the posts, set
                up and monitor the paid campaigns, and send you a short
                monthly summary of what actually worked
              </li>
              <li>Either way you keep every file and every image</li>
              <li>
                Ad spend is paid directly by you to the platform — we never
                mark it up
              </li>
            </ul>
            <div style={{ marginTop: "var(--s6)" }}>
              <a className="btn" href="#contact">
                Ask for a quote
              </a>
            </div>
          </div>
          <div className="card" style={{ background: "var(--citron)", padding: "var(--s7)" }}>
            <h4 style={{ fontSize: "1.6rem" }}>The full loop</h4>
            <p style={{ color: "var(--cocoa)" }}>
              Menu, website and ads together is how a small business ends up
              looking like a brand: the ad shows the product, the link opens
              a menu where the product is priced and photographed, and the
              site backs it up. One studio, one design system, one monthly
              conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <div>
            <h3>Fresh sets, every month.</h3>
            <p>
              Maintenance for ads means new creative on a schedule: seasonal
              offers, new products, refreshed campaigns before the old ones
              tire out, and the numbers explained in plain language.
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
            Let&apos;s get your
            <br />
            products seen.
          </h2>
          <p>
            Tell us what you sell and what you&apos;d like people to do when
            they see it. We&apos;ll reply within one business day with a plan
            and a price.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Social%20ads%20project"
            >
              Email the studio
            </a>
            <a className="btn quiet" href="https://www.instagram.com/kakao.ink/">
              Message us on Instagram
            </a>
          </div>
          <p style={{ fontSize: "0.8rem", marginTop: "var(--s5)" }}>
            Reply in one business day · First set in one to two weeks
          </p>
        </div>
      </section>
    </main>
  );
}