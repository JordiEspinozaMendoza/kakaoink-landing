"use client";

import { useState } from "react";
import Link from "next/link";

type OptionValue = [string, number];

type OptionGroup = {
  l: string;
  v: OptionValue[];
};

type MenuItem = {
  n: string;
  d: string;
  p: number;
  a: keyof typeof ART;
  tag: string;
  opts: OptionGroup[];
};

type Category = "cones" | "shakes" | "bites";

const ART = {
  cone: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#FFD7D2" />
      <circle cx={50} cy={38} r={21} fill="#F5A6AC" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={37} cy={30} r={13} fill="#FFFFF5" stroke="#6D2D14" strokeWidth={3} />
      <path d="M30 52h40L50 92z" fill="#F1C436" stroke="#6D2D14" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  ),
  choco: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#EAE07E" />
      <circle cx={50} cy={38} r={21} fill="#6D2D14" />
      <circle cx={40} cy={32} r={12} fill="#8A4326" />
      <path d="M30 52h40L50 92z" fill="#F1C436" stroke="#6D2D14" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  ),
  sorbet: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#C0D5DD" />
      <circle cx={50} cy={36} r={20} fill="#FF6633" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={44} cy={30} r={6} fill="#F1C436" />
      <path d="M30 50h40L50 90z" fill="#FFFFF5" stroke="#6D2D14" strokeWidth={3} strokeLinejoin="round" />
    </svg>
  ),
  shake: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#F5A6AC" />
      <path d="M34 34h32l-5 52H39z" fill="#FFFFF5" stroke="#6D2D14" strokeWidth={3} />
      <path d="M34 34h32l-1 14H35z" fill="#F1C436" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={50} cy={28} r={10} fill="#FFD7D2" stroke="#6D2D14" strokeWidth={3} />
      <rect x={58} y={12} width={6} height={26} rx={3} fill="#5C88CD" stroke="#6D2D14" strokeWidth={3} />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#DDD4C4" />
      <path d="M30 36h38v34a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14z" fill="#6D2D14" stroke="#6D2D14" strokeWidth={3} />
      <path d="M30 36h38v12H30z" fill="#FFFFF5" stroke="#6D2D14" strokeWidth={3} />
      <path d="M68 44h8a9 9 0 0 1 0 18h-8" fill="none" stroke="#6D2D14" strokeWidth={3} />
    </svg>
  ),
  waffle: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#FFD7D2" />
      <rect x={22} y={26} width={56} height={48} rx={8} fill="#F1C436" stroke="#6D2D14" strokeWidth={3} />
      <path d="M40 26v48M60 26v48M22 44h56M22 60h56" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={66} cy={34} r={7} fill="#FF6633" stroke="#6D2D14" strokeWidth={3} />
    </svg>
  ),
  cookie: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#C0D5DD" />
      <circle cx={50} cy={50} r={28} fill="#E0A96D" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={42} cy={42} r={5} fill="#6D2D14" />
      <circle cx={60} cy={48} r={5} fill="#6D2D14" />
      <circle cx={48} cy={60} r={5} fill="#6D2D14" />
    </svg>
  ),
  berry: (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width={100} height={100} fill="#EAE07E" />
      <path d="M34 34h32l-5 52H39z" fill="#F5A6AC" stroke="#6D2D14" strokeWidth={3} />
      <circle cx={50} cy={28} r={10} fill="#FF6633" stroke="#6D2D14" strokeWidth={3} />
      <rect x={58} y={12} width={6} height={26} rx={3} fill="#5C88CD" stroke="#6D2D14" strokeWidth={3} />
    </svg>
  ),
} as const;

const MENU: Record<Category, MenuItem[]> = {
  cones: [
    {
      n: "Classic scoop",
      d: "One scoop, house waffle cone, sea salt.",
      p: 3.5,
      a: "cone",
      tag: "Vegetarian",
      opts: [
        { l: "Size", v: [["Single", 0], ["Double", 1.8], ["Triple", 3.2]] },
        { l: "Add", v: [["Sprinkles", 0.5], ["Hot fudge", 0.9], ["Extra cone", 1]] },
      ],
    },
    {
      n: "Dark cocoa",
      d: "70% cocoa, churned in-house every morning.",
      p: 4.2,
      a: "choco",
      tag: "Contains dairy",
      opts: [
        { l: "Size", v: [["Single", 0], ["Double", 1.8]] },
        { l: "Add", v: [["Cocoa nibs", 0.7], ["Sea salt", 0.3]] },
      ],
    },
    {
      n: "Blood orange sorbet",
      d: "Sharp, bright, gone in a minute.",
      p: 3.9,
      a: "sorbet",
      tag: "Dairy free · Vegan",
      opts: [
        { l: "Size", v: [["Cup", 0], ["Cone", 0.4], ["Double", 1.9]] },
        { l: "Add", v: [["Fresh mint", 0.4], ["Citrus zest", 0.3]] },
      ],
    },
  ],
  shakes: [
    {
      n: "Malted vanilla shake",
      d: "Thick enough to stand a spoon in.",
      p: 6.5,
      a: "shake",
      tag: "Contains dairy, gluten",
      opts: [
        { l: "Size", v: [["12 oz", 0], ["16 oz", 1.5]] },
        { l: "Add", v: [["Whipped cream", 0.6], ["Espresso shot", 1.2], ["Cookie crumb", 0.8]] },
      ],
    },
    {
      n: "Berry cream shake",
      d: "Strawberry, raspberry, a little lemon.",
      p: 6.9,
      a: "berry",
      tag: "Contains dairy",
      opts: [
        { l: "Size", v: [["12 oz", 0], ["16 oz", 1.5]] },
        { l: "Add", v: [["Fresh berries", 1.1], ["Oat milk", 0.5]] },
      ],
    },
    {
      n: "Iced cocoa latte",
      d: "Cold brew, house cocoa, your milk.",
      p: 5.4,
      a: "coffee",
      tag: "Vegan option",
      opts: [
        { l: "Milk", v: [["Whole", 0], ["Oat", 0.5], ["Almond", 0.5]] },
        { l: "Add", v: [["Extra shot", 1.2], ["Vanilla", 0.4]] },
      ],
    },
  ],
  bites: [
    {
      n: "Waffle stack",
      d: "Two waffles, scoop on top, maple on the side.",
      p: 8.2,
      a: "waffle",
      tag: "Contains gluten, egg",
      opts: [
        { l: "Scoop", v: [["Vanilla", 0], ["Dark cocoa", 0.7], ["Sorbet", 0.5]] },
        { l: "Add", v: [["Berries", 1.1], ["Fudge", 0.9]] },
      ],
    },
    {
      n: "Ice cream sandwich",
      d: "Two chewy cookies, one fat scoop.",
      p: 5.6,
      a: "cookie",
      tag: "Contains gluten, dairy",
      opts: [
        { l: "Cookie", v: [["Chocolate chip", 0], ["Double cocoa", 0.4]] },
        { l: "Add", v: [["Rolled in sprinkles", 0.5]] },
      ],
    },
  ],
};

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "cones", label: "Cones" },
  { key: "shakes", label: "Shakes" },
  { key: "bites", label: "Bites" },
];

const money = (n: number) => "$" + n.toFixed(2);

function DemoPhone() {
  const [cat, setCat] = useState<Category>("cones");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [picks, setPicks] = useState<Record<number, OptionValue>>({});

  const items = MENU[cat];
  const activeItem = openIndex !== null ? items[openIndex] : null;

  function openItem(i: number) {
    const initial: Record<number, OptionValue> = {};
    items[i].opts.forEach((g, gi) => {
      initial[gi] = g.v[0];
    });
    setPicks(initial);
    setOpenIndex(i);
  }

  function backToList() {
    setOpenIndex(null);
  }

  function selectCategory(next: Category) {
    setCat(next);
    setOpenIndex(null);
  }

  const total = activeItem
    ? activeItem.p + Object.values(picks).reduce((s, o) => s + o[1], 0)
    : 0;

  return (
    <div>
      <div className="phone">
        <div className="phone-top">
          <div className="mark">
            scoop<span>.</span>shop
          </div>
          <small>Demo menu</small>
        </div>

        <div className="tabs" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className="tab"
              role="tab"
              aria-selected={cat === c.key}
              onClick={() => selectCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {activeItem ? (
          <div className="detail on">
            <div className="art">{ART[activeItem.a]}</div>
            <h3>{activeItem.n}</h3>
            <p className="desc">
              {activeItem.d}
              <br />
              <strong>{activeItem.tag}</strong>
            </p>

            {activeItem.opts.map((g, gi) => (
              <div key={g.l}>
                <div className="opt-label">{g.l}</div>
                <div className="opts">
                  {g.v.map((o, oi) => (
                    <button
                      key={o[0]}
                      className="opt"
                      aria-pressed={picks[gi]?.[0] === o[0]}
                      onClick={() =>
                        setPicks((prev) => ({ ...prev, [gi]: o }))
                      }
                    >
                      {o[0]}
                      {o[1] ? " +" + money(o[1]) : ""}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="detail-foot">
              <span className="opt-label" style={{ margin: 0 }}>
                Total
              </span>
              <span className="total">{money(total)}</span>
              <button className="link-btn" onClick={backToList}>
                ← All items
              </button>
            </div>
          </div>
        ) : (
          <div className="items">
            {items.map((it, i) => (
              <button key={it.n} className="item" onClick={() => openItem(i)}>
                <span className="thumb">{ART[it.a]}</span>
                <span>
                  <h4>{it.n}</h4>
                  <p>{it.d}</p>
                </span>
                <span className="price">{money(it.p)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "var(--cocoa)",
          marginTop: "var(--s4)",
        }}
      >
        ↑ Tap an item to open it.
      </p>
    </div>
  );
}

export default function MenuServicePage() {
  return (
    <>
      <main>
        <header className="hero">
          <div className="wrap hero-in">
            <span className="pill" style={{ background: "var(--cream)" }}>
              Service 01 · Our specialty
            </span>
            <h1 style={{ marginTop: "var(--s5)" }}>
              A menu people can actually see.
            </h1>
            <p>
              An interactive digital menu is not a PDF on a screen. Every item
              has a photo and a description, every option has a price that
              updates as your customer taps, and you can change any of it
              from your phone in seconds. One link, one QR code, no app to
              download.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#demo">
                Try the demo
              </a>
              <a className="btn quiet" href="#contact">
                Ask for a quote
              </a>
            </div>
            <p className="hero-note">
              Reply in one business day · Live in one to two weeks
            </p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="eyebrow">Why it matters</div>
            <h2 className="h2">What a digital menu changes.</h2>
            <p className="lede">
              The menu is the single piece of design your customer spends the
              most time with. Moving it off paper changes how fast you can
              react, how much people order, and how much you spend keeping it
              current.
            </p>

            <div className="grid2" style={{ marginTop: "var(--s7)" }}>
              <div className="card" style={{ background: "var(--blush)" }}>
                <h4>Change anything, instantly</h4>
                <p>
                  Raise a price, hide a sold-out item, add tomorrow&apos;s
                  special — it updates everywhere the moment you save it. No
                  reprinting, no waiting on a designer, no supply problem
                  that leaves you crossing items out with a marker.
                </p>
              </div>
              <div className="card" style={{ background: "var(--fog)" }}>
                <h4>A better experience at the table</h4>
                <p>
                  Photos, ingredients, allergen and dietary information, and
                  every customization option in one place. People order with
                  confidence instead of asking the server three questions or
                  picking the only thing they recognise.
                </p>
              </div>
              <div className="card" style={{ background: "var(--glow)" }}>
                <h4>It stops costing you printing</h4>
                <p>
                  No print runs, no laminating, no stack of outdated menus in
                  the back. The cost of a change goes to zero, so your menu
                  is always current instead of always slightly wrong.
                </p>
              </div>
              <div className="card" style={{ background: "var(--travertine)" }}>
                <h4>Everyone uses their own phone</h4>
                <p>
                  Guests scan and browse on their own device. Nothing gets
                  passed around the table, nothing needs wiping down between
                  services, and the menu is still in their pocket after they
                  leave.
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
              What&apos;s inside
            </div>
            <h2
              className="h2"
              style={{ color: "var(--cream)", textShadow: "4px 4px 0 var(--cocoa)" }}
            >
              Built to sell, not just to list.
            </h2>
            <div className="grid3" style={{ marginTop: "var(--s7)" }}>
              <div className="card">
                <h4>Photo of every item</h4>
                <p>
                  Not a stock salad. Your actual products, shot and retouched
                  so they look like they do on a good day.
                </p>
              </div>
              <div className="card">
                <h4>Options priced live</h4>
                <p>
                  Sizes, flavors, toppings, milks, extras. The total updates
                  as they choose, so nothing is a surprise at the counter.
                </p>
              </div>
              <div className="card">
                <h4>Filters &amp; dietary info</h4>
                <p>
                  Vegan, gluten free, allergens, spice level. People find
                  what they can eat without asking anyone.
                </p>
              </div>
              <div className="card">
                <h4>Categories &amp; specials</h4>
                <p>
                  Sections that match how you actually sell, plus a spot to
                  push whatever you need to move today.
                </p>
              </div>
              <div className="card">
                <h4>Your brand, not a template</h4>
                <p>
                  Colors, type and layout designed around your shop. It looks
                  like you, not like every other QR menu.
                </p>
              </div>
              <div className="card">
                <h4>QR code &amp; one link</h4>
                <p>
                  For tables, windows, delivery bags and your social bio. Add
                  ordering or POS links whenever you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap split">
            <div>
              <div className="eyebrow">Included in every menu</div>
              <h2 className="h2">Photography, handled.</h2>
              <p className="lede">
                A menu is only as good as its pictures, and most businesses
                don&apos;t have usable ones. That part is our job, not yours.
              </p>
              <ul className="checks">
                <li>
                  We photograph your real products — styled, lit and
                  retouched for screen
                </li>
                <li>
                  Or we generate ultra-realistic AI imagery when a shoot
                  isn&apos;t practical: new items, seasonal specials, or a
                  menu you need live before the camera comes out
                </li>
                <li>
                  Either way, it&apos;s organic-looking and consistent across
                  the whole menu — no mismatched phone snapshots
                </li>
                <li>
                  You keep the images and can reuse them for ads, delivery
                  apps and social
                </li>
              </ul>
              <div style={{ marginTop: "var(--s6)" }}>
                <a className="btn" href="#contact">
                  Ask about photography
                </a>
              </div>
            </div>
            <div className="card" style={{ background: "var(--citron)", padding: "var(--s7)" }}>
              <h4 style={{ fontSize: "1.6rem" }}>A note on AI imagery</h4>
              <p style={{ color: "var(--cocoa)" }}>
                We use it where it genuinely helps — filling gaps, previewing
                a dish, keeping a large menu visually consistent — and we
                tune it until it looks like food someone actually made. When
                a product needs to be exactly what arrives on the plate, we
                shoot it. You&apos;ll always know which is which.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "var(--blush)",
            borderTop: "var(--stroke)",
            borderBottom: "var(--stroke)",
          }}
        >
          <div className="wrap">
            <div className="eyebrow">Side by side</div>
            <h2 className="h2">Printed menu vs. interactive menu.</h2>
            <p style={{ color: "var(--cocoa)", fontWeight: 500, maxWidth: "56ch" }}>
              Same list of products. Very different experience for the
              person deciding what to spend.
            </p>

            <div className="table-wrap" style={{ marginTop: "var(--s7)" }}>
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Printed menu or PDF</th>
                    <th>kakao.ink interactive menu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Product images</th>
                    <td className="old">
                      Text only, or a handful of photos on the cover
                    </td>
                    <td className="new">
                      A photo and description for every single item
                    </td>
                  </tr>
                  <tr>
                    <th>Reading it on a phone</th>
                    <td className="old">Pinch, zoom, drag, give up</td>
                    <td className="new">
                      Built for the phone first — tap, scroll, done
                    </td>
                  </tr>
                  <tr>
                    <th>Changing a price</th>
                    <td className="old">Reprint, or cross it out with a pen</td>
                    <td className="new">
                      Edit it yourself, live everywhere in seconds
                    </td>
                  </tr>
                  <tr>
                    <th>Sold out today</th>
                    <td className="old">The server has to explain, every table</td>
                    <td className="new">Hide the item with one tap</td>
                  </tr>
                  <tr>
                    <th>Options and add-ons</th>
                    <td className="old">A footnote nobody reads</td>
                    <td className="new">
                      Offered while choosing, with the price updating live
                    </td>
                  </tr>
                  <tr>
                    <th>Allergens &amp; diets</th>
                    <td className="old">Ask the staff and hope</td>
                    <td className="new">Labelled and filterable on every item</td>
                  </tr>
                  <tr>
                    <th>Specials</th>
                    <td className="old">A chalkboard by the door</td>
                    <td className="new">Its own section, changed whenever you like</td>
                  </tr>
                  <tr>
                    <th>Cost over a year</th>
                    <td className="old">Every change is a new print run</td>
                    <td className="new">Changes cost nothing</td>
                  </tr>
                  <tr>
                    <th>Sharing it</th>
                    <td className="old">Only exists inside your shop</td>
                    <td className="new">
                      One link for your bio, maps, delivery bags and ads
                    </td>
                  </tr>
                  <tr>
                    <th>Wear and tear</th>
                    <td className="old">Stained, torn, out of date</td>
                    <td className="new">Always the current version</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="demo">
          <div className="wrap split">
            <div>
              <div className="eyebrow">See it working</div>
              <h2 className="h2">Our demo menu.</h2>
              <p className="lede">
                This is a generic menu we built to show how the real thing
                behaves — an ice cream shop, in our own brand colors. Switch
                categories, open an item, change the size and the toppings,
                and watch the total move.
              </p>
              <p className="lede">
                Yours would be designed around your products, your
                photography and your brand. Same mechanics, completely
                different look.
              </p>
              <div style={{ marginTop: "var(--s6)" }}>
                <a className="btn" href="#contact">
                  Get a quote for yours
                </a>
              </div>
            </div>
            <DemoPhone />
          </div>
        </section>

        <section className="strip">
          <div className="wrap">
            <div>
              <h3>Keep it current, every month.</h3>
              <p>
                Optional maintenance for your menu: price and item updates,
                seasonal specials, new photography as dishes change, and
                hosting. Send a message, we make the change the same day.
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
              Send us
              <br />
              your menu.
            </h2>
            <p>
              Whatever you have — a PDF, a photo of the board, a note on your
              phone. We&apos;ll reply within one business day with a plan, a
              price and a timeline.
            </p>
            <div className="cta-actions">
              <a
                className="btn"
                href="mailto:hello@kakao.ink?subject=Interactive%20digital%20menu"
              >
                Email the studio
              </a>
              <a className="btn quiet" href="https://www.instagram.com/kakao.ink/">
                Message us on Instagram
              </a>
            </div>
            <p style={{ fontSize: "0.8rem", marginTop: "var(--s5)" }}>
              Reply in one business day · Menus live in one to two weeks
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Link className="mark" href="/">
            kakao<span>.</span>ink
          </Link>
          <div>
            <Link className="f" href="/menu">
              Digital menus
            </Link>
            <Link className="f" href="/websites">
              Websites
            </Link>
            <Link className="f" href="/ads">
              Social ads
            </Link>
            <Link className="f" href="/">
              Studio
            </Link>
          </div>
          <small>
            Design studio · Tijuana, MX ·{" "}
            <a href="mailto:hello@kakao.ink"> hello@kakao.ink </a>
          </small>
        </div>
      </footer>
    </>
  );
}