import { LegalLayout } from './LegalLayout'

export const TerminosPage: React.FC = () => {
  return (
    <LegalLayout title="Términos de Uso" lastUpdated="23 de abril de 2026">
      <h2>1. Identificación del titular</h2>
      <p>
        El presente sitio web es propiedad de Autárquico (en adelante, "la Empresa"),
        con domicilio social en España y correo electrónico de contacto: info@autarqui.co.
      </p>

      <h2>2. Objeto</h2>
      <p>
        Los presentes Términos de Uso regulan el acceso y utilización del sitio web
        autarqui.co (en adelante, "el Sitio"), así como los servicios de gestión
        empresarial automatizada mediante inteligencia artificial que se ofrecen a
        través del mismo.
      </p>

      <h2>3. Aceptación</h2>
      <p>
        El acceso y uso del Sitio implica la aceptación plena y sin reservas de todos
        los términos y condiciones recogidos en el presente documento. Si no está de
        acuerdo con alguno de ellos, le rogamos que no utilice el Sitio.
      </p>

      <h2>4. Condiciones de uso</h2>
      <p>El usuario se compromete a:</p>
      <ul>
        <li>Utilizar el Sitio y sus servicios de conformidad con la ley, la moral, el orden público y los presentes Términos.</li>
        <li>No utilizar el Sitio con fines ilícitos o que puedan resultar lesivos para los derechos e intereses de terceros.</li>
        <li>No introducir virus informáticos, código malicioso o cualquier otro sistema que pueda causar daños en los sistemas de la Empresa.</li>
        <li>Proporcionar información veraz y actualizada en los formularios del Sitio.</li>
      </ul>

      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio (textos, imágenes, marcas, logotipos, software,
        diseño gráfico y código fuente) están protegidos por las leyes de propiedad
        intelectual e industrial vigentes en España y en la Unión Europea. Queda
        prohibida su reproducción, distribución o transformación sin autorización
        expresa de la Empresa.
      </p>

      <h2>6. Exclusión de garantías y responsabilidad</h2>
      <p>
        La Empresa no garantiza la disponibilidad continua e ininterrumpida del Sitio.
        En la medida permitida por la legislación aplicable, la Empresa no será
        responsable de los daños o perjuicios derivados del uso del Sitio, incluyendo
        errores u omisiones en los contenidos, falta de disponibilidad o transmisión de
        virus.
      </p>

      <h2>7. Enlaces a terceros</h2>
      <p>
        El Sitio puede contener enlaces a sitios web de terceros. La Empresa no se
        responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        La Empresa se reserva el derecho de modificar los presentes Términos en
        cualquier momento. Las modificaciones serán efectivas desde su publicación en
        el Sitio.
      </p>

      <h2>9. Legislación aplicable y jurisdicción</h2>
      <p>
        Los presentes Términos se rigen por la legislación española. Para la resolución
        de cualquier controversia, las partes se someterán a los juzgados y tribunales
        del domicilio del usuario cuando este tenga la condición de consumidor, de
        conformidad con el Real Decreto Legislativo 1/2007.
      </p>
    </LegalLayout>
  )
}
