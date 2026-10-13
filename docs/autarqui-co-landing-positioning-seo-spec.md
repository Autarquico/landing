# autarqui.co --- Landing, posicionamiento, ICP, SEO/GEO y tagging

**Versión:** 1.0\
**Marca / firma:** autarqui.co\
**Razón social:** Autarquico Labs SLU

> **El software debe adaptarse a la empresa. No al revés.**

> **Diseñamos, construimos y adaptamos software para empresas. También
> para la nuestra.**

------------------------------------------------------------------------

## 1. Objetivo

`autarqui.co` no debe comportarse como la landing tradicional de una
consultora.

Debe cumplir cuatro funciones simultáneamente:

-   **Positioning:** explicar qué es autarqui.co y qué cree.
-   **Proof:** demostrar capacidad mediante software construido por la
    firma.
-   **Publishing:** convertir el Journal en parte del producto de marca.
-   **Demand:** permitir que empresas con problemas tecnológicos
    relevantes descubran que pueden trabajar con autarqui.co.

La sensación buscada no es:

> "Esta empresa vende desarrollo de software."

Sino:

> "Esta gente construye software, tiene criterio propio y quizá debería
> hablar con ellos sobre nuestro problema."

------------------------------------------------------------------------

## 2. Posicionamiento

### Categoría

**Firma independiente de software.**

Secundariamente, para discovery y SEO:

**Diseño y desarrollo de software a medida para empresas.**

No se debe sacrificar la marca intentando introducir todas las keywords
en el lenguaje visible.

### Core proposition

> **El software debe adaptarse a la empresa. No al revés.**

### Descriptor

> **Diseñamos, construimos y adaptamos software para empresas. También
> para la nuestra.**

### Belief

Las particularidades de una empresa pueden ser una ventaja competitiva.
Su software debería ser capaz de reflejarlas.

### Enemy

El enemigo conceptual es el software que obliga a modificar procesos
valiosos simplemente porque la herramienta no puede adaptarse.

autarqui.co no es anti-SaaS, anti-ERP ni anti-software estándar.

La posición es:

> **No adaptar innecesariamente el negocio a las limitaciones de la
> herramienta.**

### Promise

Entender primero el problema empresarial y después decidir qué conviene
hacer:

**buy → adapt → integrate → automate → build**

La capacidad de decir **"no necesitas software a medida"** forma parte
de la propuesta de valor.

### Segunda creencia

> **Construir nuestros propios productos nos hace mejores construyendo
> software para otros.**

Los productos propios no son una anomalía que haya que justificar. Son
activos tecnológicos, experimentos comerciales y pruebas de la capacidad
de la firma.

------------------------------------------------------------------------

## 3. ICP

El ICP inicial no se define principalmente por industria, sino por
**situación tecnológica y empresarial**.

### ICP principal

Empresa establecida con un problema operativo o estratégico que el
software estándar no resuelve correctamente.

Características orientativas:

-   negocio funcionando y con procesos reales;
-   existe un problema cuyo valor justifica una solución específica;
-   la organización ha acumulado suficiente complejidad como para que
    las herramientas genéricas empiecen a limitarla;
-   existe voluntad de cambiar procesos, sistemas o software si la
    solución tiene sentido;
-   el comprador valora criterio, producto e ingeniería, no únicamente
    horas de desarrollo.

### Buyer

Según la organización:

-   founder / CEO;
-   CTO;
-   COO;
-   Head of Operations;
-   responsable de tecnología o transformación;
-   propietario o directivo de una empresa con suficiente complejidad
    operativa.

### Geografía

España puede ser el mercado inicial, pero la marca no debe presentarse
como exclusivamente española ni como una agencia local.

La arquitectura debe permitir trabajar internacionalmente.

### ICP triggers

autarqui.co debería resultar relevante cuando una organización piensa
cosas como:

-   "Nuestro software ya no refleja cómo funciona nuestra empresa."
-   "Estamos haciendo demasiadas cosas manualmente."
-   "Tenemos datos repartidos entre varios sistemas."
-   "Nuestro ERP o CRM no puede hacer algo importante."
-   "Necesitamos conectar nuestras herramientas."
-   "Tenemos un proceso interno que podría convertirse en software."
-   "Tenemos software legacy que necesitamos modernizar."
-   "Queremos incorporar IA a un proceso real."
-   "Queremos desarrollar un producto digital."
-   "Necesitamos una herramienta interna que no existe."
-   "Estamos pagando varias herramientas para conseguir un workflow
    mediocre."
-   "Nuestra empresa ha evolucionado, pero nuestro software no."

Estos triggers son además una fuente natural de contenido para el
Journal y de demanda orgánica.

### Anti-ICP

No optimizar comercialmente para:

-   body-shopping;
-   contratación de developers por hora como commodity;
-   webs corporativas convencionales;
-   proyectos cuyo principal criterio sea precio;
-   proyectos de IA sin un problema empresarial real;
-   clones de productos existentes;
-   clientes que sólo quieren ejecución y no permiten criterio técnico o
    de producto.

------------------------------------------------------------------------

## 4. Arquitectura del sitio

Mantener el sitio deliberadamente pequeño.

``` text
/
├── work/
│   ├── delta/
│   ├── sigma/
│   └── reservit/
│
├── journal/
│   └── [slug]/
│
└── firm/
```

En el futuro:

``` text
/work/[client-project]
/journal/[article]
/authors/[author]
```

No crear por ahora decenas de landing pages SEO geográficas o casi
duplicadas.

Ejemplos a evitar:

``` text
/desarrollo-software-a-medida-madrid
/desarrollo-software-a-medida-barcelona
/agencia-inteligencia-artificial
```

La adquisición orgánica debe surgir de autoridad temática, páginas de
alta calidad y problemas reales, no de una red de páginas programáticas
mediocres.

------------------------------------------------------------------------

## 5. Homepage

### Navegación

``` text
autarqui.co

WORK        JOURNAL        FIRM
```

Puede probarse inicialmente sin un CTA comercial permanente en
navegación.

------------------------------------------------------------------------

## 6. Hero

### H1

> **El software debe adaptarse a la empresa.\
> No al revés.**

### Body

> Diseñamos, construimos y adaptamos software para empresas. También
> para la nuestra.

### CTA principal

> **Ver lo que construimos →**

### CTA secundario

> **Trabajar con autarqui.co →**

El H1 debe construir marca y comunicar la tesis. No es necesario
convertirlo en una concatenación de keywords.

El contexto semántico para buscadores y sistemas de IA se proporciona
mediante el `<title>`, metadata, contenido posterior, enlaces internos y
structured data.

------------------------------------------------------------------------

## 7. Homepage --- Thesis

### H2

> **Las empresas son particulares. Su software también puede serlo.**

Copy base:

> Cada empresa acumula procesos, conocimiento y formas de operar que la
> hacen diferente.
>
> El software estándar resuelve extraordinariamente bien los problemas
> estándar. Pero no todos los problemas lo son.
>
> En autarqui.co diseñamos tecnología alrededor del negocio. Construimos
> cuando merece la pena construir. Adaptamos cuando no hace falta
> empezar de cero. Integramos lo que ya funciona y aplicamos
> inteligencia artificial cuando aporta una capacidad real.
>
> El objetivo no es crear más software. Es conseguir que la tecnología
> se adapte mejor a la empresa.

Esta sección introduce de forma natural conceptos semánticos relevantes:

-   software para empresas;
-   software a medida;
-   software estándar;
-   diseño;
-   integración;
-   automatización;
-   inteligencia artificial.

------------------------------------------------------------------------

## 8. Homepage --- Work

### H2

> **Lo que construimos**

Intro:

> Construimos software para nuestros clientes y para nosotros mismos.
> Nuestros productos son también el lugar donde ponemos a prueba
> nuestras ideas sobre producto, ingeniería e inteligencia artificial.

Los productos actuales funcionan como activos tecnológicos y pruebas de
capacidad.

### Delta --- nombre provisional

Tag:

``` text
PRODUCT · BUSINESS INTELLIGENCE
```

Descriptor:

> Inteligencia empresarial conversacional sobre los datos de una
> organización.

### Sigma --- nombre provisional

Tag provisional:

``` text
PRODUCT · PROFESSIONAL SOFTWARE
```

El descriptor definitivo debe definirse a partir del posicionamiento
específico del producto antes de elegir nombre y dominio definitivos.

### Reservit

Tag:

``` text
PRODUCT · OPERATIONS
```

El producto mantiene su identidad propia.

### CTA

> **Todo nuestro trabajo →**

Cuando exista trabajo para clientes que pueda mostrarse:

``` text
CLIENT WORK
```

Para exploraciones:

``` text
EXPERIMENT
```

La frontera entre producto propio, investigación, experimentación y
trabajo para clientes debe ser deliberadamente permeable. Esa tensión
forma parte de la identidad de autarqui.co.

------------------------------------------------------------------------

## 9. Taxonomía pública de Work

Utilizar dos dimensiones.

### Type

``` text
PRODUCT
CLIENT WORK
EXPERIMENT
OPEN SOURCE
```

No es necesario utilizar todas desde el primer día.

### Domain

``` text
AI
BUSINESS INTELLIGENCE
OPERATIONS
AUTOMATION
DATA
INTERNAL TOOLS
PROFESSIONAL SOFTWARE
INTEGRATIONS
```

Ejemplo:

``` text
DELTA

PRODUCT
BUSINESS INTELLIGENCE
AI
```

Máximo recomendado: 2--3 tags relevantes por elemento.

No crear páginas indexables de tags hasta que exista suficiente
contenido para justificar cada página.

------------------------------------------------------------------------

## 10. Homepage --- Journal

### H2

> **Journal**

Intro opcional:

> Notas sobre software, empresas, inteligencia artificial y las cosas
> que aprendemos construyendo.

Mostrar los últimos 3--4 artículos.

Ejemplo:

``` text
SOFTWARE · 8 MIN

El boom del software a medida
```

El Journal no debe presentarse como "Noticias", "Blog corporativo" o
"Insights".

Es una parte central de la identidad editorial de autarqui.co.

------------------------------------------------------------------------

## 11. Taxonomía del Journal

Mantener una taxonomía pequeña.

Topics iniciales:

``` text
SOFTWARE
AI
BUSINESS
ENGINEERING
PRODUCT
```

Separar internamente **tipo de pieza** y **tema**.

Ejemplo:

``` yaml
type: essay
topics:
  - software
  - business
```

Tipos posibles:

``` text
essay
note
case-study
research
```

Esto permite que el Journal crezca sin mezclar formato y temática.

------------------------------------------------------------------------

## 12. Homepage --- Firm

La homepage sólo necesita un teaser comercial.

### H2

> **La firma**

Copy:

> Trabajamos con empresas en problemas donde producto, software y
> negocio se encuentran.
>
> Podemos construir algo nuevo, adaptar lo que ya existe, conectar
> sistemas o automatizar procesos. A veces la respuesta correcta es no
> construir nada.

Capabilities:

``` text
BUILD
ADAPT
CONNECT
AUTOMATE
```

CTA:

> **Trabajar con autarqui.co →**

------------------------------------------------------------------------

## 13. `/firm`

Esta página explica qué significa contratar a autarqui.co sin
convertirse en una página tradicional de "servicios".

### H1

Opción principal:

> **Software para problemas que no vienen de serie.**

Alternativa:

> **Trabajamos donde el software estándar deja de encajar.**

### Build

Software empresarial, herramientas internas, aplicaciones y nuevos
productos.

### Adapt

Software existente, workflows específicos, legacy y extensiones.

### Connect

APIs, sistemas, datos e infraestructura.

### Automate

Procesos operativos, IA aplicada, agentes y sistemas de conocimiento.

### Buy or build?

Incluir explícitamente:

> No todo merece software propio.
>
> Parte de nuestro trabajo consiste en identificar qué merece
> construirse, qué puede adaptarse y qué deberías simplemente comprar.

La página debe vender **criterio**, no horas de desarrollo ni
tecnologías concretas.

------------------------------------------------------------------------

## 14. Modelo de engagement

Explicar de forma sencilla cómo puede trabajar una empresa con
autarqui.co.

### Explore

Entender el problema, el negocio, los sistemas existentes y determinar
qué merece construirse.

### Build

Diseñar y construir el sistema.

### Operate

Mantenerlo, medirlo y hacerlo evolucionar cuando tenga sentido.

Este modelo puede cubrir tanto proyectos puntuales como relaciones
tecnológicas continuadas.

------------------------------------------------------------------------

## 15. CTA y contacto

Evitar CTAs genéricos de consultoría:

-   "Book a call"
-   "Solicita presupuesto"
-   "Agenda una consulta gratuita"

Preferir:

> **Cuéntanos qué estás intentando construir.**

o:

> **Hablemos de tu problema.**

Formulario mínimo:

``` text
Nombre
Email
Empresa

¿Qué estás intentando resolver?

[Enviar]
```

Opcional:

``` text
Web de la empresa
```

No pedir presupuesto inicialmente.

------------------------------------------------------------------------

## 16. SEO --- Homepage

### `<title>`

Opción recomendada inicialmente:

``` html
<title>autarqui.co — Software a medida para empresas</title>
```

Alternativa de marca:

``` html
<title>autarqui.co — Firma independiente de software</title>
```

La primera tiene mayor claridad de categoría para búsqueda. La página se
ocupa de aportar diferenciación.

### Meta description

``` html
<meta
  name="description"
  content="Diseñamos, construimos y adaptamos software para empresas. Software a medida, integraciones, automatización e inteligencia artificial aplicada."
/>
```

------------------------------------------------------------------------

## 17. SEO --- Titles del resto

### Firm

``` text
Software a medida para empresas — autarqui.co
```

Description:

> Diseñamos y desarrollamos software empresarial, herramientas internas,
> integraciones, automatizaciones y sistemas de IA adaptados a cada
> organización.

### Work

``` text
Work — Software y productos construidos por autarqui.co
```

### Journal

``` text
Journal — autarqui.co
```

Description:

> Ensayos y notas sobre software, inteligencia artificial, producto,
> ingeniería y empresa.

### Producto

Ejemplo provisional:

``` text
Delta — Inteligencia empresarial conversacional | autarqui.co
```

------------------------------------------------------------------------

## 18. Heading hierarchy

Mantener una jerarquía semántica correcta:

``` text
H1
  H2
    H3
  H2
    H3
```

No elegir etiquetas HTML por razones visuales. La presentación debe
resolverse con CSS y la semántica debe mantenerse limpia para
accesibilidad, buscadores y extracción automática.

------------------------------------------------------------------------

## 19. Structured data / Schema.org

### Entidad corporativa

La marca pública es **autarqui.co** y la razón social es **Autarquico
Labs SLU**.

El JSON-LD debe reflejar ambas correctamente.

Ejemplo conceptual:

``` json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "autarqui.co",
  "legalName": "Autarquico Labs SLU",
  "url": "https://autarqui.co/",
  "description": "Firma independiente de software que diseña, construye y adapta software para empresas."
}
```

Añadir únicamente datos verificables.

No inventar:

-   número de empleados;
-   fecha de fundación;
-   premios;
-   clientes;
-   valoraciones;
-   direcciones que no correspondan.

### Journal

Utilizar `Article` o `BlogPosting` con:

``` text
headline
description
datePublished
dateModified
author
publisher
image
mainEntityOfPage
```

`dateModified` debe corresponder a modificaciones reales.

### Breadcrumbs

Utilizar `BreadcrumbList`, por ejemplo:

``` text
Journal > Article
Work > Delta
```

### Productos

Cuando un elemento sea realmente un producto de software, valorar
`SoftwareApplication`.

Usar `Product` únicamente cuando semánticamente corresponda.

No crear `AggregateRating`, `Review` u `Offer` ficticios para obtener
rich results.

------------------------------------------------------------------------

## 20. GEO / AEO / descubrimiento por LLMs

La estrategia no debe basarse en trucos específicos para modelos de
lenguaje.

Las páginas deben ser:

**crawlable + understandable + quotable + attributable**

### Crawlable

-   HTML renderizado de forma accesible para crawlers.
-   Contenido principal disponible sin depender de una SPA pesada.
-   URLs permanentes.
-   Canonicals correctos.
-   Sitemap XML.
-   Robots correctamente configurado.

### Understandable

Cada página importante debe dejar claro:

-   qué es;
-   quién lo hace;
-   para quién;
-   qué problema resuelve;
-   cómo funciona;
-   cómo se relaciona con autarqui.co.

### Quotable

Incluir frases autocontenidas y precisas.

Ejemplo:

> autarqui.co es una firma independiente de software que diseña,
> construye y adapta software para empresas.

Este tipo de frase es más fácil de comprender, recuperar y citar que
claims abstractos.

### Attributable

Cada artículo debe tener:

-   autor claro;
-   fecha de publicación;
-   fecha de actualización cuando corresponda;
-   información sobre el autor;
-   enlaces a contenido relacionado;
-   referencias cuando se realicen afirmaciones externas relevantes.

------------------------------------------------------------------------

## 21. `llms.txt`

Puede implementarse por su bajo coste, pero no debe tratarse como una
estrategia GEO principal ni asumir compatibilidad universal.

Ejemplo:

``` text
# autarqui.co

> autarqui.co is an independent software firm. We design, build and adapt software for companies, including our own.

Legal entity: Autarquico Labs SLU

## Main sections

- Work: https://autarqui.co/work
- Journal: https://autarqui.co/journal
- Firm: https://autarqui.co/firm
```

------------------------------------------------------------------------

## 22. Robots

Revisar conscientemente qué crawlers se permiten.

No bloquear accidentalmente buscadores o sistemas de descubrimiento
relevantes.

La política respecto a crawlers de IA, entrenamiento y retrieval debe
ser una decisión explícita, no un efecto accidental de una plantilla de
`robots.txt`.

------------------------------------------------------------------------

## 23. Sitemap

Generar automáticamente:

``` text
/sitemap.xml
```

Debe contener las páginas indexables relevantes:

``` text
/
/firm
/work
/work/...
/journal
/journal/...
```

Utilizar `lastmod` únicamente cuando represente cambios reales.

------------------------------------------------------------------------

## 24. Canonicalización

Todas las páginas indexables deben declarar su canonical.

Ejemplo:

``` html
<link rel="canonical" href="https://autarqui.co/..." />
```

Normalizar:

-   HTTP → HTTPS;
-   `www` / non-`www`;
-   trailing slash;
-   parámetros de query;
-   duplicados.

Debe existir una única versión indexable de cada recurso.

------------------------------------------------------------------------

## 25. Open Graph y X

X será el principal canal de distribución social.

Cada artículo debería disponer de una social card específica, idealmente
de **1200 × 630 px**.

No utilizar una única imagen genérica para todos los artículos.

Ejemplo visual:

``` text
autarqui.co / JOURNAL

EL BOOM DEL
SOFTWARE A MEDIDA

[autor]
```

Mantener un sistema visual consistente para convertir cada publicación
compartida en un distinctive brand asset.

Metadata:

``` text
og:title
og:description
og:image
og:url

twitter:card = summary_large_image
twitter:title
twitter:description
twitter:image
```

Validar periódicamente el renderizado real en X.

------------------------------------------------------------------------

## 26. URL strategy

Utilizar URLs humanas y permanentes.

Bien:

``` text
/journal/software-a-medida
/journal/la-fabrica-despues-del-codigo
/work/reservit
```

Evitar:

``` text
/blog/post?id=1847
```

No introducir fechas en las URLs de artículos evergreen.

------------------------------------------------------------------------

## 27. Internal linking

El Journal, Work y Firm deben formar un único grafo de conocimiento y
navegación.

Los artículos deben enlazar de forma natural hacia:

-   otros artículos;
-   productos o trabajos relacionados;
-   `/firm` cuando exista relación comercial real.

Las páginas de Work deben enlazar hacia artículos que expliquen ideas,
decisiones o problemas relacionados.

Ejemplo:

``` text
El boom del software a medida
        ↓
      /firm
        ↓
   client project
        ↓
engineering article
```

El objetivo es evitar que Journal, productos y firma parezcan tres
proyectos independientes.

------------------------------------------------------------------------

## 28. Content clusters SEO

El contenido se escribe para lectores, pero se construye autoridad
temática de forma deliberada.

### Cluster: software a medida

Pillar existente:

**El boom del software a medida**

Posibles piezas:

-   cuándo merece la pena desarrollar software a medida;
-   software a medida vs SaaS;
-   cuánto cuesta realmente mantener software propio;
-   cuándo construir una herramienta interna;
-   build vs buy;
-   por qué fracasan proyectos de software empresarial.

### Cluster: IA + empresa

-   cuándo usar agentes;
-   qué procesos no automatizar;
-   IA sobre datos empresariales;
-   permisos y seguridad;
-   human-in-the-loop;
-   arquitectura de agentes empresariales.

### Cluster: business software

-   ERP;
-   CRM;
-   legacy;
-   integraciones;
-   spreadsheets;
-   internal tools;
-   APIs;
-   data silos.

Evitar convertir el Journal en una fábrica de contenido SEO genérico.

------------------------------------------------------------------------

## 29. Search intent

### Category intent

Query aproximada:

``` text
software a medida empresas
```

Landing principal:

``` text
/firm
```

### Problem intent

Ejemplo:

``` text
conectar ERP con CRM
```

Landing:

artículo específico del Journal.

### Idea / research intent

Ejemplo:

``` text
futuro software a medida inteligencia artificial
```

Landing:

ensayo del Journal.

El visitante puede entrar por cualquiera de estos puntos y descubrir el
resto del universo de autarqui.co.

------------------------------------------------------------------------

## 30. Tagging analítico

Mantener una instrumentación pequeña y útil.

### Core events

``` text
page_view

work_view
journal_article_view
firm_view

work_cta_click
firm_cta_click
contact_start
contact_submit

outbound_product_click

journal_to_work
journal_to_firm
work_to_firm
```

### X / campañas

Utilizar UTMs:

``` text
utm_source=x
utm_medium=social
utm_campaign=<campaign>
utm_content=<post-id-or-slug>
```

Ejemplo:

``` text
?utm_source=x
&utm_medium=social
&utm_campaign=software-a-medida
&utm_content=build-vs-buy-01
```

No utilizar UTMs en enlaces internos.

------------------------------------------------------------------------

## 31. Tagging de leads

Cuando llegue un contacto, almacenar cuando sea posible:

``` text
lead_source
landing_page
referrer
utm_source
utm_campaign
utm_content

company
problem_type
```

`problem_type` puede clasificarse internamente:

``` text
BUILD
ADAPT
CONNECT
AUTOMATE
OTHER
```

No es necesario obligar al usuario a clasificar su problema en el
formulario.

------------------------------------------------------------------------

## 32. Métricas

No optimizar inicialmente para tráfico bruto.

### Discovery

``` text
Organic search impressions
X impressions
Direct traffic
Branded searches
```

### Attention

``` text
Journal readers
Engaged sessions
Returning visitors
Work views
```

### Intent

``` text
Firm views
Work → Firm
Journal → Firm
Contact starts
```

### Business

``` text
Qualified leads
Conversations
Proposals
Won projects
Revenue
```

### North-star inicial

> **Qualified conversations generated.**

No:

> Monthly visitors.

------------------------------------------------------------------------

## 33. Search Console

Configurar Google Search Console desde el inicio y enviar el sitemap.

Monitorizar:

``` text
Queries
Pages
Countries
CTR
Average position
Indexation
```

Prestar especial atención al lenguaje con el que el buscador empieza a
relacionar autarqui.co. Es información útil para entender cómo el
mercado y los motores interpretan la categoría.

------------------------------------------------------------------------

## 34. Performance

La web de una firma de software debe ser excepcionalmente rápida.

Objetivos mínimos:

``` text
LCP < 2.5 s
INP < 200 ms
CLS < 0.1
```

Idealmente, superarlos ampliamente.

Principios:

-   pocas dependencias;
-   poco JavaScript innecesario;
-   imágenes optimizadas;
-   fuentes controladas;
-   evitar trackers innecesarios;
-   renderizado robusto;
-   progressive enhancement cuando corresponda.

La performance forma parte de la percepción de marca.

------------------------------------------------------------------------

## 35. Multilingual

No traducir automáticamente todo al inglés por obligación.

Preparar correctamente la arquitectura para internacionalización y
`hreflang` cuando exista una versión inglesa mantenida de verdad.

Ejemplo futuro:

``` text
/es/...
/en/...
```

La versión inglesa debe tener el mismo nivel de cuidado que la española.

Una traducción mediocre es peor que una web española con identidad
fuerte.

------------------------------------------------------------------------

## 36. SEO local

No posicionar autarqui.co artificialmente como una agencia local salvo
que exista una estrategia comercial local explícita.

La firma puede identificar honestamente dónde opera o está constituida,
pero su presencia debe sentirse **internet-native** y capaz de trabajar
con empresas independientemente de su ubicación.

No crear páginas geográficas sin una razón real.

> **Decisión (2026-10-13):** autarqui.co menciona Tenerife / Islas Canarias
> **solo como sede honesta** — dirección `Santa Úrsula, Tenerife` en el JSON-LD
> y línea de sede en footer y `llms.txt`. El `areaServed`, en cambio, es **España**
> (no Tenerife/Canarias), para no limitar el alcance en buscadores. Es la "capa
> local" compatible con esta sección: señalar dónde estamos sin posicionarnos
> como agencia local ni montar páginas geográficas programáticas.

------------------------------------------------------------------------

## 37. Footer

Mantenerlo editorial y pequeño.

Ejemplo:

``` text
autarqui.co

Independent software firm.

Work
Journal
Firm

X
Email

Autarquico Labs SLU
© 2026
```

Añadir enlaces legales y de privacidad donde corresponda.

------------------------------------------------------------------------

## 38. Arquitectura conceptual

``` text
                       autarqui.co
                            │
                INDEPENDENT SOFTWARE FIRM
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
         WORK            JOURNAL             FIRM
          │                 │                 │
      What we build     What we think     Work with us
          │                 │                 │
     ┌────┼────┐       essays/notes      Build
   Product Client Exp.   engineering      Adapt
                                           Connect
                                           Automate
```

Debajo de todo:

> **El software debe adaptarse a la empresa. No al revés.**

Y como prueba permanente:

> **Diseñamos, construimos y adaptamos software para empresas. También
> para la nuestra.**

El objetivo es que posicionamiento, productos, filosofía, modelo
comercial, contenido, SEO y distribución formen un único sistema.

------------------------------------------------------------------------

## 39. Principios de marca

### Software alrededor del negocio

Primero entender la organización. Después decidir qué construir,
adaptar, integrar, automatizar o comprar.

### Build when it matters

No todo merece software propio. Lo que diferencia a una empresa,
concentra conocimiento o condiciona sus operaciones puede merecerlo.

### Own what matters

Las empresas deberían conservar capacidad de decisión sobre la
tecnología crítica para su funcionamiento.

### Builders build

autarqui.co no sólo construye software para terceros. Construye
productos propios para poner sus ideas a prueba bajo las mismas
restricciones que cualquier creador de software real.

------------------------------------------------------------------------

## 40. Identidad verbal

Evitar lenguaje genérico de consultoría:

``` text
Unlock your potential
Digital transformation
Innovative solutions
Harness the power of AI
End-to-end solutions
Empower your business
Cutting-edge
Future-proof
```

Preferir afirmaciones concretas y con punto de vista:

> **El software debe adaptarse a la empresa. No al revés.**

> **Diseñamos, construimos y adaptamos software para empresas. También
> para la nuestra.**

> **No todo problema necesita software nuevo.**

> **Construye lo que te diferencia. Compra el resto.**

> **La IA abarata el software. El criterio se vuelve más valioso.**

> **Construimos productos porque las ideas sobre software también deben
> ponerse a prueba.**

La voz debe transmitir criterio técnico, independencia, pragmatismo,
oficio y pensamiento propio.

------------------------------------------------------------------------

## 41. Rol de los productos

Delta, Sigma y Reservit no deben presentarse como una distracción
respecto a la firma.

Son parte de su tesis.

Demuestran que autarqui.co:

-   identifica problemas;
-   diseña productos;
-   construye sistemas completos;
-   toma decisiones de arquitectura;
-   despliega software;
-   opera y mantiene lo que construye;
-   aprende de usuarios reales;
-   asume las consecuencias de sus propias decisiones técnicas.

**Delta** y **Sigma** se consideran nombres provisionales hasta definir
mejor su posicionamiento, naming y dominio.

**Reservit** puede conservar su identidad independiente.

El orden recomendado para los nombres provisionales es:

**posicionamiento del producto → naming → dominio**

y no al contrario.

------------------------------------------------------------------------

## 42. Distribución

Canales principales:

### X

Canal de conversación, distribución y pensamiento público.

Temas:

-   software economics;
-   software craftsmanship;
-   business software;
-   IA aplicada;
-   producto;
-   decisiones de ingeniería;
-   construcción de autarqui.co;
-   productos y experimentos.

Evitar convertir la cuenta en un feed corporativo de anuncios.

### Journal

Lugar permanente para desarrollar ideas con profundidad.

Relación:

``` text
X → conversación y distribución
Journal → pensamiento permanente
Work → evidencia
Firm → relación comercial
```

------------------------------------------------------------------------

## 43. Flywheel

``` text
Construimos
     ↓
Aprendemos
     ↓
Escribimos
     ↓
Distribuimos
     ↓
Conocemos empresas y problemas
     ↓
Construimos
```

En paralelo:

``` text
Productos propios
     ↓
Experiencia real
     ↓
Mejor criterio
     ↓
Mejor trabajo para clientes
     ↓
Nuevos problemas e ideas
     ↓
Nuevos productos / experimentos
```

La tensión entre firma y compañía de producto no debe eliminarse.

**Es una de las características diferenciales de autarqui.co.**
