import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How kakao.ink handles personal data and cookies.",
  alternates: { canonical: "/privacy", languages: { es: "/es/privacy" } },
};

export default function Privacy() {
  return (
    <main>
      <section>
        <div className="wrap legal">
          <h1>Privacy policy</h1>
          <p>Last updated: November 4, 2026</p>

          <h2>Who we are</h2>
          <p>
            kakao.ink is a design studio run by Jordi Espinoza Mendoza, who
            is responsible for the personal data described here. Address:
            Calle Segunda, Lote 26, Manzana 2, Col. El Tecolote, C.P. 22644,
            Tijuana, Baja California,
            Mexico. Contact:{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a>.
          </p>

          <h2>What we collect</h2>
          <p>
            Only what you send us when you contact us by email or Instagram:
            your name, contact details and whatever you include in your
            message. We do not ask for sensitive data.
          </p>
          <p>
            We also use Vercel Analytics to count page visits. It is
            anonymous, does not use cookies and does not identify you. Our
            hosting provider (Vercel) may keep standard server logs, such as
            IP address and browser type, for security.
          </p>

          <h2>Why we use it</h2>
          <p>
            We use your data only for purposes needed to work with you:
            replying to your messages, preparing quotes, and delivering and
            billing projects you hire us for. We have no secondary purposes:
            we do not send marketing, sell your data or use it for
            advertising.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Messages from people who do not become clients: up to 2 years
            after our last contact. Client project and billing records: 5
            years, as required by Mexican tax law. After that we delete them.
          </p>

          <h2>Who we share it with</h2>
          <p>
            Only the service providers we need to run the site and talk to
            you (Vercel for hosting, our email provider, Instagram/Meta if you
            write to us there). We do not share it with anyone else unless the
            law requires it.
          </p>

          <h2>Cookies</h2>
          <p>
            This site does not use tracking or advertising cookies. Your
            browser stores one small setting to remember that you closed the
            cookie notice.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to access, correct or delete your data, or object to
            its use (ARCO rights), and withdraw consent at any time.
          </p>
          <p>
            To make a request, email{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a> with:
          </p>
          <ul>
            <li>Your full name and an email address for our reply.</li>
            <li>
              A copy of an official ID (or, if someone acts for you, their ID
              and proof they represent you).
            </li>
            <li>Which data the request is about and what you want us to do.</li>
            <li>For corrections, the correct information.</li>
          </ul>
          <p>
            We will reply within 20 business days. If we accept the request,
            we will carry it out within 15 business days after our reply. If
            your request is missing information, we will ask for it within 5
            business days, and you will have 10 business days to send it.
          </p>

          <h2>Limiting use of your data</h2>
          <p>
            You can ask us at any time to stop contacting you or to limit how
            we use your data, without deleting it. Email{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a> and we will
            add you to our do-not-contact list.
          </p>

          <h2>Changes</h2>
          <p>We will post any changes to this policy on this page.</p>
        </div>
      </section>
    </main>
  );
}
