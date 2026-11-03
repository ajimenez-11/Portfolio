// All personal content for the portfolio lives here.
// Source: LinkedIn profile + CV (public/Antonio_Jimenez_CV.pdf).

export const SITE_URL = "https://ajimenez.app"

export const PROFILE = {
  name: "Antonio Jiménez",
  role: "Desarrollador Odoo",
  company: "PYMING",
  tagline:
    "Diseño y desarrollo módulos a medida en Odoo con Python, conecto el ERP con otros servicios mediante APIs y automatizo procesos para que las empresas trabajen de forma más eficiente.",
  location: "Mataró, Barcelona",
  email: "antonio6.jimenez6@gmail.com",
  linkedin: "https://www.linkedin.com/in/antonio-jimnez/",
  github: "https://github.com/ajimenez-11",
  cv: "/Antonio_Jimenez_CV.pdf",
  // Shows the "Disponible para nuevas oportunidades" tag in the hero.
  available: false,
}

export const EXPERIENCE = [
  {
    company: "PYMING",
    url: "https://pyming.com",
    logo: { icon: "/logos/pyming-icon.png", light: "/logos/pyming-black.png", dark: "/logos/pyming-white.png" },
    companyDetail: "Odoo consulting services",
    location: "Mataró",
    period: "Jul 2025 – actualidad",
    tags: ["Python", "Odoo", "XML", "QWeb", "PostgreSQL", "APIs REST"],
    roles: [
      {
        title: "Desarrollador Odoo",
        type: "Jornada completa",
        date: "Feb 2026 – actualidad",
        current: true,
        description:
          "Desarrollo de módulos personalizados en Odoo con Python, XML y QWeb para clientes de distintos sectores. Análisis de requisitos, uso avanzado del ORM y PostgreSQL, e integración con APIs externas para automatizar procesos como la facturación y la comunicación con clientes.",
      },
      {
        title: "Desarrollador Odoo",
        type: "Prácticas",
        date: "Jul 2025 – feb 2026",
        current: false,
        description:
          "Desarrollo e implementación de módulos personalizados en Odoo con Python y XML, adaptando funcionalidades a las necesidades de cada cliente. Automatización de procesos mediante APIs y PostgreSQL, y desarrollo de sitios web optimizados aplicando buenas prácticas de SEO.",
      },
    ],
  },
]

export const EDUCATION = [
  {
    date: "2024 - 2026",
    title: "Grado Superior en Desarrollo de Aplicaciones Web",
    school: "Institut Carles Vallbona",
    subjects: [
      "Programación en entorno cliente y servidor",
      "Bases de datos",
      "Interfaces web",
      "Seguridad y protección de aplicaciones",
      "Despliegue y mantenimiento de aplicaciones",
    ],
  },
  {
    date: "2022 - 2024",
    title: "Grado Medio en Sistemas Microinformáticos y Redes",
    school: "Institut Thos i Codina",
    subjects: [
      "Aplicaciones web y ofimáticas",
      "Montaje y mantenimiento de equipos",
      "Seguridad informática",
      "Sistemas operativos en red",
      "Servicios en red",
    ],
  },
]

// Main stack shown in the hero (icons from Simple Icons)
export const STACK = [
  { name: "Odoo", icon: "odoo" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Laravel", icon: "laravel" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Linux", icon: "linux" },
] as const

export const SKILL_GROUPS = [
  {
    title: "Backend y ERP",
    items: ["Odoo: módulos a medida, ORM, vistas XML, informes QWeb", "Python", "PHP / Laravel", "APIs REST e integraciones"],
  },
  { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQL"] },
  { title: "Frontend", items: ["JavaScript", "HTML / CSS", "Vite", "SEO técnico"] },
  { title: "DevOps", items: ["Docker / Docker Compose", "CI/CD con GitHub Actions", "Linux y SSH", "Git"] },
]

export const PROJECTS: {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}[] = [
  {
    title: "Vitalis",
    subtitle: "Gestión de cocinas profesionales",
    description:
      "Aplicación web para cocinas centrales y empresas de catering, desarrollada junto a David Moya como proyecto final de DAW. Digitaliza albaranes de proveedores, controla el stock en tiempo real, descuenta ingredientes automáticamente al producir recetas y ofrece trazabilidad completa por lote con alertas de caducidad. Incluye roles de usuario, panel de control y despliegue con Docker y CI/CD en GitHub Actions.",
    image: "/projects/vitalis.webp",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Docker", "GitHub Actions"],
  },
]

export const CERTIFICATIONS = [
  "Python 3 - nivel intermedio",
  "Git - control de versiones y trabajo colaborativo",
]

export const LANGUAGES = [
  { name: "Catalán", level: "Nativo" },
  { name: "Castellano", level: "Nativo" },
  { name: "Inglés", level: "Intermedio" },
]
