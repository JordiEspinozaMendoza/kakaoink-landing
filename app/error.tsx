"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <header className="hero">
        <div className="wrap hero-in">
          <span className="pill" style={{ background: "var(--cream)" }}>
            Something went wrong
          </span>
          <h1 style={{ marginTop: "var(--s5)" }}>
            That one&apos;s on us, not you.
          </h1>
          <p>
            The page hit a snag loading. It&apos;s usually temporary — try
            again, or head back to home and come at it from there.
          </p>
          <div className="hero-cta">
            <button className="btn" onClick={() => reset()}>
              Try again
            </button>
            <Link className="btn quiet" href="/">
              Back to home
            </Link>
          </div>
          {error.digest ? (
            <p className="hero-note">Error reference: {error.digest}</p>
          ) : null}
        </div>
      </header>

      <section className="cta" id="contact">
        <div className="wrap">
          <h2>
            Still stuck?
            <br />
            Tell us what happened.
          </h2>
          <p>
            Let us know what you were trying to do when this came up and
            we&apos;ll sort it out.
          </p>
          <div className="cta-actions">
            <a
              className="btn"
              href="mailto:hello@kakao.ink?subject=Something%20went%20wrong%20on%20the%20site"
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