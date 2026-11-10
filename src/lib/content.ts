export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];
export const content = {
  es: {
    nav: ['Servicios','Proyectos','Experiencia','Sobre mí','Contacto'],
    availability: 'Disponible para proyectos freelance de alcance definido',
    eyebrow: 'SOFTWARE ENGINEER · FULL STACK · iOS',
    heroA: 'Software que resuelve', heroB: 'problemas reales.',
    intro: 'Soy desarrollador de software con más de 10 años de experiencia creando productos web, sistemas backend y aplicaciones móviles. Ayudo a empresas a convertir necesidades complejas en soluciones confiables.',
    hire: 'Hablemos de tu proyecto', experienceBtn: 'Ver mi experiencia',
    stats: [['10+','Años de experiencia'],['Web · APIs · iOS','Especialidades'],['Banca digital','Experiencia empresarial']],
    servicesEyebrow: 'QUÉ PUEDO HACER POR TI', servicesTitle: 'De la idea al producto.', servicesDesc: 'Desarrollo de extremo a extremo y mejoras concretas para productos que necesitan avanzar.',
    services: [
      ['Backend & APIs','APIs REST, servicios robustos e integraciones entre plataformas para procesos más eficientes.','Node.js · NestJS · PostgreSQL'],
      ['Aplicaciones web','Dashboards, portales internos y plataformas empresariales rápidas y fáciles de mantener.','Angular · React · Next.js'],
      ['Desarrollo móvil','Experiencias iOS y multiplataforma centradas en estabilidad, rendimiento y usabilidad.','Swift · UIKit · SwiftUI · Flutter'],
      ['Modernización','Refactorización, solución de errores, optimización y evolución de productos existentes.','Arquitectura · Calidad · Mantenimiento']
    ],
    workEyebrow: 'TRABAJO SELECCIONADO', workTitle: 'Experiencia aplicada.', workDesc: 'Una muestra de los sectores y problemas técnicos en los que he trabajado. Los casos empresariales se presentan sin información confidencial.',
    projects: [
      ['01','Banca digital','Desarrollo de aplicaciones iOS','Participación en funcionalidades de cuentas, transacciones, autenticación e integraciones para experiencias de banca móvil.',['Swift','UIKit','SwiftUI','Backbase']],
      ['02','Transporte y movilidad','Soluciones web y móviles','Desarrollo de herramientas digitales para operaciones y experiencias de usuario en el sector transporte.',['Web','Mobile','Backend']],
      ['03','Plataformas empresariales','Aplicaciones e integraciones','Desarrollo y mantenimiento de funcionalidades frontend y backend para soluciones empresariales.',['Node.js','Angular','APIs']]
    ],
    expEyebrow: 'MI TRAYECTORIA', expTitle: 'Experiencia profesional.',
    jobs: [
      ['2022 — Actualidad','Banco Caja Social','Software Developer · iOS','Desarrollo y personalización de funcionalidades para aplicaciones de banca digital, integraciones y experiencia móvil.'],
      ['2021 — 2022','Montechelo','Software Developer','Desarrollo y mantenimiento de herramientas y sistemas empresariales.'],
      ['2019 — 2020','Cellvoz','Software Developer','Desarrollo frontend y backend para plataformas empresariales.'],
      ['2016 — 2019','Taxisya','Software Developer','Soluciones web y móviles para el sector transporte.'],
      ['2015 — 2016','Imaginamos','Software Developer','Soluciones web y móviles para diferentes industrias.']
    ],
    aboutEyebrow: 'MÁS ALLÁ DEL CÓDIGO', aboutTitle: 'Tecnología con criterio de negocio.',
    aboutText: 'Me gusta construir software claro, seguro y mantenible. He colaborado en proyectos de banca digital, transporte, seguros y servicios empresariales, trabajando con equipos multidisciplinarios y arquitecturas de producción. Mi enfoque combina la ejecución técnica con una comunicación directa y responsable.',
    stackTitle: 'Tecnologías con las que trabajo',
    stacks: [['Frontend','Angular','React','Next.js','TypeScript'],['Backend','Node.js','NestJS','PHP','REST APIs'],['Mobile','Swift','UIKit','SwiftUI','Flutter'],['Datos y herramientas','PostgreSQL','MySQL','MongoDB','Git']],
    processEyebrow: 'COLABORACIÓN FREELANCE', processTitle: 'Un proceso claro, de principio a fin.',
    process: [['01','Entendimiento','Revisamos el problema, objetivos y restricciones.'],['02','Propuesta','Definimos alcance, entregables y tiempos.'],['03','Desarrollo','Implementación con comunicación y avances.'],['04','Entrega','Validación, documentación y siguientes pasos.']],
    contactEyebrow: '¿TRABAJAMOS JUNTOS?', contactTitle: 'Construyamos algo útil.', contactText: '¿Tienes un proyecto que necesita avanzar o estás buscando experiencia técnica para tu equipo? Conversemos.',
    contactFreelance: 'Tengo un proyecto freelance', contactRecruiter: 'Quiero hablar sobre una oportunidad laboral',
    contactNote: 'También puedes escribirme directamente:', footer: 'Diseñado y desarrollado con atención al detalle.',
    legal: 'Los proyectos empresariales describen contribuciones profesionales y no implican representación de las organizaciones.'
  },
  en: {
    nav: ['Services','Projects','Experience','About','Contact'],
    availability: 'Available for well-scoped freelance projects',
    eyebrow: 'SOFTWARE ENGINEER · FULL STACK · iOS',
    heroA: 'Software built for', heroB: 'real-world challenges.',
    intro: "I'm a software engineer with 10+ years of experience building web products, backend systems, and mobile applications. I help businesses turn complex needs into reliable software solutions.",
    hire: "Let's discuss your project", experienceBtn: 'Explore my experience',
    stats: [['10+','Years of experience'],['Web · APIs · iOS','Areas of expertise'],['Digital banking','Enterprise experience']],
    servicesEyebrow: 'HOW I CAN HELP', servicesTitle: 'From idea to product.', servicesDesc: 'End-to-end development and focused improvements for products ready to move forward.',
    services: [
      ['Backend & APIs','REST APIs, robust services, and platform integrations to streamline business processes.','Node.js · NestJS · PostgreSQL'],
      ['Web applications','Dashboards, internal tools, and enterprise platforms built for speed and maintainability.','Angular · React · Next.js'],
      ['Mobile development','iOS and cross-platform experiences focused on stability, performance, and usability.','Swift · UIKit · SwiftUI · Flutter'],
      ['Modernization','Refactoring, bug fixing, performance optimization, and evolution of existing products.','Architecture · Quality · Maintenance']
    ],
    workEyebrow: 'SELECTED WORK', workTitle: 'Experience in practice.', workDesc: 'A selection of industries and technical challenges I have worked on. Enterprise examples do not disclose confidential information.',
    projects: [
      ['01','Digital banking','iOS application development','Contributions to accounts, transactions, authentication, and integrations for mobile banking experiences.',['Swift','UIKit','SwiftUI','Backbase']],
      ['02','Transport & mobility','Web and mobile solutions','Development of digital tools for operations and user experiences in the transportation industry.',['Web','Mobile','Backend']],
      ['03','Enterprise platforms','Applications & integrations','Frontend and backend feature development and maintenance for enterprise software.',['Node.js','Angular','APIs']]
    ],
    expEyebrow: 'MY JOURNEY', expTitle: 'Professional experience.',
    jobs: [
      ['2022 — Present','Banco Caja Social','Software Developer · iOS','Development and customization of digital banking features, integrations, and mobile experiences.'],
      ['2021 — 2022','Montechelo','Software Developer','Development and maintenance of enterprise tools and systems.'],
      ['2019 — 2020','Cellvoz','Software Developer','Frontend and backend development for enterprise platforms.'],
      ['2016 — 2019','Taxisya','Software Developer','Web and mobile solutions for the transportation industry.'],
      ['2015 — 2016','Imaginamos','Software Developer','Web and mobile solutions for different industries.']
    ],
    aboutEyebrow: 'BEYOND THE CODE', aboutTitle: 'Technology with business perspective.',
    aboutText: 'I care about building clear, secure, and maintainable software. I have collaborated on projects in digital banking, transportation, insurance, and enterprise services, working with multidisciplinary teams and production architectures. I combine technical execution with direct, accountable communication.',
    stackTitle: 'Technologies I work with',
    stacks: [['Frontend','Angular','React','Next.js','TypeScript'],['Backend','Node.js','NestJS','PHP','REST APIs'],['Mobile','Swift','UIKit','SwiftUI','Flutter'],['Data & tools','PostgreSQL','MySQL','MongoDB','Git']],
    processEyebrow: 'FREELANCE COLLABORATION', processTitle: 'A clear process, from start to finish.',
    process: [['01','Discovery','We review the problem, goals, and constraints.'],['02','Proposal','We agree on scope, deliverables, and timeline.'],['03','Development','Implementation with regular communication and updates.'],['04','Delivery','Validation, documentation, and next steps.']],
    contactEyebrow: "LET'S WORK TOGETHER", contactTitle: "Let's build something useful.", contactText: 'Have a project that needs to move forward, or looking for an experienced engineer to join your team? Let’s talk.',
    contactFreelance: 'I have a freelance project', contactRecruiter: 'Discuss a career opportunity',
    contactNote: 'You can also email me directly:', footer: 'Designed and developed with attention to detail.',
    legal: 'Enterprise projects describe professional contributions and do not imply representation of the organizations.'
  }
} as const;
