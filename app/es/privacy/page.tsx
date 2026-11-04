import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Cómo kakao.ink trata los datos personales y las cookies.",
  alternates: { canonical: "/es/privacy", languages: { en: "/privacy" } },
};

export default function Privacidad() {
  return (
    <main>
      <section>
        <div className="wrap legal">
          <h1>Aviso de privacidad</h1>
          <p>Última actualización: 4 de noviembre de 2026</p>

          <h2>Responsable</h2>
          <p>
            Jordi Espinoza Mendoza, titular del estudio de diseño kakao.ink,
            es responsable de los datos personales descritos aquí. Domicilio:
            Calle Segunda, Lote 26, Manzana 2, Col. El Tecolote, C.P. 22644,
            Tijuana, Baja California,
            México. Contacto:{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a>.
          </p>

          <h2>Datos que recabamos</h2>
          <p>
            Solo los que nos envías al contactarnos por correo o Instagram:
            nombre, datos de contacto y lo que incluyas en tu mensaje. No
            solicitamos datos sensibles.
          </p>
          <p>
            También usamos Vercel Analytics para contar visitas. Es anónimo,
            no usa cookies y no te identifica. Nuestro proveedor de hosting
            (Vercel) puede guardar registros técnicos, como dirección IP y
            tipo de navegador, por seguridad.
          </p>

          <h2>Finalidades</h2>
          <p>
            Usamos tus datos solo para finalidades primarias, necesarias para
            trabajar contigo: responder tus mensajes, preparar cotizaciones, y
            entregar y facturar los proyectos que nos contrates. No tenemos
            finalidades secundarias: no enviamos publicidad, no vendemos tus
            datos ni los usamos para mercadotecnia.
          </p>

          <h2>Conservación</h2>
          <p>
            Mensajes de personas que no se vuelven clientes: hasta 2 años
            después del último contacto. Expedientes y facturación de
            clientes: 5 años, conforme a la legislación fiscal mexicana.
            Después los eliminamos.
          </p>

          <h2>Transferencias</h2>
          <p>
            Solo con los proveedores necesarios para operar el sitio y
            comunicarnos contigo (Vercel para hosting, nuestro proveedor de
            correo, Instagram/Meta si nos escribes por ahí). No los
            compartimos con nadie más salvo que la ley lo exija.
          </p>

          <h2>Cookies</h2>
          <p>
            Este sitio no usa cookies de rastreo ni de publicidad. Tu
            navegador guarda un pequeño ajuste para recordar que cerraste el
            aviso de cookies.
          </p>

          <h2>Derechos ARCO</h2>
          <p>
            Puedes solicitar el acceso, rectificación, cancelación u oposición
            al uso de tus datos, así como revocar tu consentimiento en
            cualquier momento.
          </p>
          <p>
            Para presentar una solicitud, escribe a{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a> con:
          </p>
          <ul>
            <li>Tu nombre completo y un correo para responderte.</li>
            <li>
              Copia de una identificación oficial (o, si actúa alguien en tu
              nombre, su identificación y el documento que acredite la
              representación).
            </li>
            <li>Los datos a los que se refiere y lo que solicitas.</li>
            <li>En caso de rectificación, la información correcta.</li>
          </ul>
          <p>
            Responderemos en un plazo máximo de 20 días hábiles. Si la
            solicitud procede, la haremos efectiva dentro de los 15 días
            hábiles siguientes a nuestra respuesta. Si falta información, te
            la pediremos dentro de 5 días hábiles y tendrás 10 días hábiles
            para enviarla.
          </p>

          <h2>Limitar el uso de tus datos</h2>
          <p>
            Puedes pedirnos en cualquier momento que dejemos de contactarte o
            que limitemos el uso de tus datos, sin eliminarlos. Escribe a{" "}
            <a href="mailto:hello@kakao.ink">hello@kakao.ink</a> y te
            incluiremos en nuestro listado de exclusión.
          </p>

          <h2>Cambios</h2>
          <p>Publicaremos cualquier cambio a este aviso en esta página.</p>
        </div>
      </section>
    </main>
  );
}
