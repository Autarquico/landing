import { LegalLayout } from './LegalLayout'

export const GdprPage: React.FC = () => {
  return (
    <LegalLayout title="Política de Protección de Datos (RGPD)" lastUpdated="23 de abril de 2026">
      <h2>1. Marco normativo</h2>
      <p>
        Autárquico cumple con el Reglamento (UE) 2016/679 del Parlamento Europeo y del
        Consejo, de 27 de abril de 2016, relativo a la protección de las personas
        físicas en lo que respecta al tratamiento de datos personales (RGPD), así como
        con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>2. Principios del tratamiento</h2>
      <p>Todo tratamiento de datos personales realizado por Autárquico respeta los siguientes principios:</p>
      <ul>
        <li><strong>Licitud, lealtad y transparencia:</strong> los datos se tratan de manera lícita y transparente para el interesado.</li>
        <li><strong>Limitación de la finalidad:</strong> los datos se recogen con fines determinados, explícitos y legítimos.</li>
        <li><strong>Minimización de datos:</strong> solo se recogen los datos estrictamente necesarios.</li>
        <li><strong>Exactitud:</strong> los datos se mantienen actualizados y se corrigen o suprimen cuando son inexactos.</li>
        <li><strong>Limitación del plazo de conservación:</strong> los datos se conservan solo durante el tiempo necesario.</li>
        <li><strong>Integridad y confidencialidad:</strong> se aplican medidas técnicas y organizativas adecuadas para garantizar la seguridad.</li>
      </ul>

      <h2>3. Derechos de los interesados</h2>
      <p>
        De conformidad con los artículos 15 a 22 del RGPD, los interesados pueden
        ejercer los siguientes derechos:
      </p>
      <ul>
        <li><strong>Derecho de acceso</strong> (art. 15 RGPD): obtener confirmación de si se están tratando sus datos y acceder a ellos.</li>
        <li><strong>Derecho de rectificación</strong> (art. 16 RGPD): solicitar la corrección de datos personales inexactos.</li>
        <li><strong>Derecho de supresión</strong> (art. 17 RGPD): solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos.</li>
        <li><strong>Derecho a la limitación del tratamiento</strong> (art. 18 RGPD): solicitar la restricción del tratamiento en determinadas circunstancias.</li>
        <li><strong>Derecho a la portabilidad</strong> (art. 20 RGPD): recibir los datos en un formato estructurado, de uso común y lectura mecánica.</li>
        <li><strong>Derecho de oposición</strong> (art. 21 RGPD): oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.</li>
        <li><strong>Derecho a no ser objeto de decisiones automatizadas</strong> (art. 22 RGPD): no ser objeto de una decisión basada únicamente en el tratamiento automatizado que produzca efectos jurídicos o le afecte significativamente.</li>
      </ul>

      <h2>4. Cómo ejercer sus derechos</h2>
      <p>
        Puede ejercer cualquiera de estos derechos enviando un correo electrónico a
        <strong> info@autarqui.co</strong>, indicando:
      </p>
      <ul>
        <li>El derecho que desea ejercer.</li>
        <li>Sus datos identificativos (nombre y correo electrónico registrado).</li>
        <li>Copia de su documento de identidad, cuando sea necesario para verificar su identidad.</li>
      </ul>
      <p>
        Responderemos a su solicitud en el plazo máximo de un mes, prorrogable dos
        meses más en caso de solicitudes complejas, conforme al artículo 12.3 del RGPD.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        En caso de que los datos personales se transfieran a países fuera del Espacio
        Económico Europeo, se garantizará que dichos países ofrezcan un nivel de
        protección adecuado o se aplicarán las garantías apropiadas previstas en los
        artículos 46 y 47 del RGPD (cláusulas contractuales tipo, normas corporativas
        vinculantes u otros mecanismos aprobados).
      </p>

      <h2>6. Brechas de seguridad</h2>
      <p>
        En caso de que se produzca una violación de seguridad que afecte a datos
        personales, Autárquico notificará a la Agencia Española de Protección de Datos
        (AEPD) en un plazo máximo de 72 horas, conforme al artículo 33 del RGPD. Si la
        violación entraña un alto riesgo para los derechos y libertades de los
        interesados, estos serán informados sin dilación indebida (artículo 34 del RGPD).
      </p>

      <h2>7. Delegado de Protección de Datos</h2>
      <p>
        Dada la naturaleza y volumen del tratamiento actual, Autárquico no está
        obligado a designar un Delegado de Protección de Datos conforme al artículo 37
        del RGPD. No obstante, para cualquier consulta relacionada con la protección de
        datos puede contactar con nosotros en info@autarqui.co.
      </p>

      <h2>8. Autoridad de control</h2>
      <p>
        Si considera que el tratamiento de sus datos personales no se ajusta a la
        normativa vigente, tiene derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (AEPD):
      </p>
      <ul>
        <li><strong>Web:</strong> www.aepd.es</li>
        <li><strong>Dirección:</strong> C/ Jorge Juan, 6 — 28001 Madrid</li>
      </ul>
    </LegalLayout>
  )
}
