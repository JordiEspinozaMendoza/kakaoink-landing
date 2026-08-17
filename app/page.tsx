import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "kakao.ink — Design studio for shops, cafés & restaurants",
  description:
    "kakao.ink is a design studio in Tijuana, MX building digital menus, websites and social ads for small businesses.",
};

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Design studio · Tijuana, MX
          </span>

          <h1 style={{ marginTop: "var(--s5)" }}>
            We make small businesses look worth walking into.
          </h1>

          <p>
            kakao.ink is a design studio for shops, cafés, restaurants and
            anyone who sells something people want to see first. We build the
            three things your customer meets before they meet you — your menu,
            your website and your ads — and we keep them running afterwards.
          </p>

          <div className="hero-cta">
            <Link className="btn" href="#contact">
              Start a project
            </Link>
            <Link className="btn quiet" href="/menu">
              See the digital menu
            </Link>
          </div>

          <div className="svc" id="services">
            <Link className="svc-card lead" href="/menu">
              <svg className="svc-ico" viewBox="0 0 44 44" fill="none">
                <rect
                  x={9}
                  y={3}
                  width={26}
                  height={38}
                  rx={6}
                  fill="#FFFFF5"
                  stroke="#6D2D14"
                  strokeWidth={3}
                />
                <rect
                  x={14}
                  y={10}
                  width={16}
                  height={9}
                  rx={3}
                  fill="#FF6633"
                  stroke="#6D2D14"
                  strokeWidth={2.5}
                />
                <path
                  d="M14 25h16M14 31h11"
                  stroke="#6D2D14"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                />
              </svg>
              <h3>Interactive digital menus</h3>
              <p>
                What we&apos;re known for. A live menu with a photo of every
                item, sizes, extras and prices that update as your customer
                taps. One QR code, no app.
              </p>
              <span className="go">See the service →</span>
            </Link>

            <Link className="svc-card" href="/websites">
              <svg className="svc-ico" viewBox="0 0 44 44" fill="none">
                <rect
                  x={3}
                  y={7}
                  width={38}
                  height={30}
                  rx={6}
                  fill="#C0D5DD"
                  stroke="#6D2D14"
                  strokeWidth={3}
                />
                <path d="M3 16h38" stroke="#6D2D14" strokeWidth={3} />
                <rect
                  x={9}
                  y={21}
                  width={14}
                  height={10}
                  rx={3}
                  fill="#F1C436"
                  stroke="#6D2D14"
                  strokeWidth={2.5}
                />
              </svg>
              <h3>Websites &amp; landing pages</h3>
              <p>
                From a single page to a full site — built to show what you sell,
                not to sit there looking like a brochure.
              </p>
              <span className="go">See the service →</span>
            </Link>

            <Link className="svc-card" href="/ads">
              <svg className="svc-ico" viewBox="0 0 44 44" fill="none">
                <rect
                  x={5}
                  y={5}
                  width={34}
                  height={34}
                  rx={9}
                  fill="#FFD7D2"
                  stroke="#6D2D14"
                  strokeWidth={3}
                />
                <circle
                  cx={22}
                  cy={22}
                  r={8}
                  fill="#FF6633"
                  stroke="#6D2D14"
                  strokeWidth={2.5}
                />
                <circle cx={32} cy={12} r={2.6} fill="#6D2D14" />
              </svg>
              <h3>Social media ads</h3>
              <p>
                Posts and paid ads made from your own products, matching the
                menu and the site people land on.
              </p>
              <span className="go">See the service →</span>
            </Link>
          </div>
        </div>
      </header>

      <section id="presence">
        <div className="wrap">
          <div className="eyebrow">Why it matters now</div>
          <h2 className="h2">People decide before they arrive.</h2>
          <p className="lede">
            Somebody hears about your place, pulls out their phone, and gives
            you about twenty seconds. What they find in those seconds is your
            storefront now — and if it&apos;s a blurry photo of a printed menu
            and a phone number, they&apos;re guessing. Most people don&apos;t
            guess. They go where they can see what they&apos;re getting.
          </p>

          <div className="grid4" style={{ marginTop: "var(--s7)" }}>
            <div className="card" style={{ background: "var(--blush)" }}>
              <h4>They can see what they&apos;re buying</h4>
              <p>
                A real photo of the actual product takes the risk out of
                ordering. Nobody hesitates over a name they don&apos;t recognise
                when the thing is right there on screen.
              </p>
            </div>
            <div className="card" style={{ background: "var(--fog)" }}>
              <h4>Wanting comes first</h4>
              <p>
                Appetite starts with the eyes. Seeing it is what turns
                &quot;maybe&quot; into &quot;I&apos;ll take that one&quot; —
                usually before anyone reaches your counter.
              </p>
            </div>
            <div className="card" style={{ background: "var(--glow)" }}>
              <h4>Your whole offer gets seen</h4>
              <p>
                Specials, sizes, add-ons, the dish nobody ever notices on the
                board — online, each one gets its own moment instead of a line
                in a list.
              </p>
            </div>
            <div className="card" style={{ background: "var(--travertine)" }}>
              <h4>You look open and cared for</h4>
              <p>
                Current prices, real hours, recent photos. It reads the same way
                a clean counter does in person: this place is running well.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              marginTop: "var(--s6)",
              background: "var(--cocoa)",
              borderColor: "var(--cocoa)",
            }}
          >
            <p
              style={{ margin: 0, fontSize: "1.05rem", color: "var(--cream)" }}
            >
              <strong>The short version:</strong> customers who can see the
              product ask fewer questions, order faster, and add more to the
              order. That&apos;s not decoration — it&apos;s revenue you&apos;re
              already leaving on the table.
            </p>
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
            What we do
          </div>
          <h2 className="h2">Three services. One consistent brand.</h2>
          <p
            style={{ color: "var(--cocoa)", fontWeight: 500, maxWidth: "56ch" }}
          >
            Take one or take all three. When they&apos;re built together, the
            menu, the site and the ads say the same thing in the same voice —
            which is exactly what makes a small business look bigger than it is.
          </p>

          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <h4>Interactive digital menus</h4>
              <p>
                Every item photographed and described, options priced live,
                updated by you in seconds. Our specialty, and usually where
                clients start.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm" href="/menu">
                  Digital menus →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Websites &amp; landing pages</h4>
              <p>
                A landing page, a homepage or a complete site — for a shop, a
                cafeteria, a service business, anyone who needs their offer seen
                properly.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm secondary" href="/websites">
                  Website services →
                </Link>
              </div>
            </div>
            <div className="card">
              <h4>Social media ads</h4>
              <p>
                Feed posts, stories and paid ad sets built from your own
                products, pointing straight at your menu or your site.
              </p>
              <div style={{ marginTop: "var(--s5)" }}>
                <Link className="btn sm quiet" href="/ads">
                  Ad services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <div>
            <h3>We stay after launch.</h3>
            <p>
              Menus, sites and ads go stale faster than anything else you own.
              Monthly maintenance covers all three: price and item changes,
              seasonal specials, new photography, fresh ad sets, hosting and
              fixes. You send a message, we handle it.
            </p>
          </div>
          <Link className="btn secondary" href="#contact">
            Ask about maintenance
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">How we work</div>
          <h2 className="h2">Simple, and quick.</h2>
          <div className="grid3" style={{ marginTop: "var(--s7)" }}>
            <div className="card">
              <span className="num">01</span>
              <h4>You write to us</h4>
              <p>
                Tell us what you sell and what you already have. We answer
                within one business day with what we&apos;d do and what it costs
                — no long discovery process.
              </p>
            </div>
            <div className="card">
              <span className="num">02</span>
              <h4>We design it</h4>
              <p>
                One draft, your notes, one round of changes. Photography
                included when your current images aren&apos;t doing the product
                justice.
              </p>
            </div>
            <div className="card">
              <span className="num">03</span>
              <h4>Live in one to two weeks</h4>
              <p>
                We publish, hand over what you need to keep it current, and stay
                on for maintenance if you want us to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Tell us what
            <br />
            you sell.
          </h2>
          <p>
            Send us your menu, your product list or just a photo of your
            storefront. We&apos;ll write back within one business day with a
            plan and a price.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Project%20with%20kakao.ink"
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
            Reply in one business day · Most projects live in one to two weeks ·
            Based in Tijuana, working anywhere.
          </p>
        </div>
      </section>
    </main>
  );
}
