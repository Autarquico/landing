import { LegalLayout } from './LegalLayout'

export const PrivacidadPage: React.FC = () => {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="23 de abril de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        Autárquico (en adelante, "el Responsable"), con correo electrónico de contacto:
        info@autarqui.co, es el responsable del tratamiento de los datos personales
        recogidos a través del sitio web autarqui.co.
      </p>

      <h2>2. Datos que recogemos</h2>
      <p>Recogemos los siguientes datos personales:</p>
      <ul>
        <li><strong>Dirección de correo electrónico:</strong> proporcionada voluntariamente a través del formulario de lista de espera.</li>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recogidos mediante tecnologías estándar.</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Los datos personales se tratan con las siguientes finalidades:</p>
      <ul>
        <li>Gestionar la inscripción en la lista de espera del servicio.</li>
        <li>Enviar comunicaciones relacionadas con el lanzamiento y novedades del producto.</li>
        <li>Analizar el uso del sitio web para mejorar la experiencia del usuario.</li>
      </ul>

      <h2>4. Base jurídica</h2>
      <p>
        El tratamiento de datos se basa en el consentimiento del interesado (artículo
        6.1.a del RGPD), otorgado al facilitar su correo electrónico en el formulario
        de suscripción. Para datos de navegación, la base es el interés legítimo del
        Responsable (artículo 6.1.f del RGPD) en mejorar el servicio.
      </p>

      <h2>5. Conservación de los datos</h2>
      <p>
        Los datos personales se conservarán mientras el interesado no solicite su
        supresión o revoque su consentimiento. Los datos de navegación se conservarán
        de forma anonimizada durante un máximo de 24 meses.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        Los datos personales no se cederán a terceros salvo obligación legal. Se
        podrán utilizar servicios de terceros (proveedores de email, alojamiento web)
        que actuarán como encargados del tratamiento conforme al artículo 28 del RGPD,
        con los que se han suscrito los correspondientes acuerdos de tratamiento.
      </p>

      <h2>7. Derechos del interesado</h2>
      <p>
        De conformidad con el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de
        Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD),
        el interesado puede ejercer los siguientes derechos:
      </p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos personales tratamos.</li>
        <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
        <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
        <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
      </ul>
      <p>
        Para ejercer estos derechos, puede enviar un correo electrónico a
        info@autarqui.co indicando el derecho que desea ejercer y adjuntando copia de
        su documento de identidad.
      </p>
      <p>
        Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española
        de Protección de Datos (AEPD) en <strong>www.aepd.es</strong>.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        El Responsable ha adoptado las medidas técnicas y organizativas necesarias para
        garantizar la seguridad de los datos personales y evitar su alteración, pérdida,
        tratamiento o acceso no autorizado, conforme al estado de la tecnología y la
        naturaleza de los datos.
      </p>

      <h2>9. Modificaciones</h2>
      <p>
        El Responsable se reserva el derecho de modificar la presente Política de
        Privacidad. Cualquier modificación será publicada en esta página con
        indicación de la fecha de última actualización.
      </p>
    </LegalLayout>
  )
}
