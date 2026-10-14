import { useState } from 'react'

type Language = 'pt' | 'en'

const content = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Tecnologias',
      contact: 'Contato',
    },
    availability: 'Disponível para oportunidades',
    greeting: 'Olá, eu sou',
    role: 'Desenvolvedor Full Stack',
    description:
      'Transformo ideias em aplicações web funcionais, combinando interfaces intuitivas, APIs robustas e bancos de dados bem estruturados.',
    projectsButton: 'Ver projetos',
    githubButton: 'Meu GitHub',
    scroll: 'Explore meu trabalho',
    aboutLabel: '01 / SOBRE MIM',
    aboutTitle: 'Tecnologia com propósito.',
    aboutText:
      'Gosto de entender como as coisas funcionam, resolver problemas e construir soluções completas. Meu foco é desenvolver aplicações que unam uma boa experiência de uso a uma arquitetura organizada e confiável.',
    aboutExtra:
      'Este portfólio reúne meus projetos práticos, as tecnologias que estudo e minha evolução como desenvolvedor.',
    projectsLabel: '02 / PROJETOS',
    projectsTitle: 'Projetos em destaque',
    projectsText:
      'Projetos práticos que demonstram minhas habilidades e meu processo de desenvolvimento.',
    featured: 'PROJETO EM DESTAQUE',
    clientflowTitle: 'ClientFlow',
    clientflowDescription:
      'Uma aplicação full stack para gerenciamento de clientes, tarefas e atividades. Conta com autenticação JWT, controle de acesso, API REST e persistência em PostgreSQL.',
    clientflowCredentials: 'Credenciais para demonstração',
    liveDemo: 'Aplicação online',
    sourceCode: 'Código-fonte',
    status: 'Publicado em produção',
    stackLabel: 'TECNOLOGIAS UTILIZADAS',
    skillsLabel: '03 / TECNOLOGIAS',
    skillsTitle: 'Ferramentas que utilizo',
    skillsText:
      'Tecnologias aplicadas na construção de aplicações web e APIs.',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Banco de dados',
    tools: 'Ferramentas e infraestrutura',
    contactLabel: '04 / CONTATO',
    contactTitle: 'Vamos construir algo?',
    contactText:
      'Estou aberto a oportunidades profissionais, colaborações e conversas sobre tecnologia.',
    contactButton: 'Visitar meu Linkedin',
    footer: 'Feito com React, TypeScript e Tailwind CSS.',
    backTop: 'Voltar ao topo ↑',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Technologies',
      contact: 'Contact',
    },
    availability: 'Open to opportunities',
    greeting: "Hi, I'm",
    role: 'Full Stack Developer',
    description:
      'I turn ideas into functional web applications, combining intuitive interfaces, robust APIs, and well-structured databases.',
    projectsButton: 'View projects',
    githubButton: 'My GitHub',
    scroll: 'Explore my work',
    aboutLabel: '01 / ABOUT ME',
    aboutTitle: 'Technology with purpose.',
    aboutText:
      'I enjoy understanding how things work, solving problems, and building complete solutions. My focus is on developing applications that combine a great user experience with an organized and reliable architecture.',
    aboutExtra:
      'This portfolio showcases my practical projects, the technologies I study, and my growth as a developer.',
    projectsLabel: '02 / PROJECTS',
    projectsTitle: 'Featured projects',
    projectsText:
      'Practical projects that demonstrate my skills and development process.',
    featured: 'FEATURED PROJECT',
    clientflowTitle: 'ClientFlow',
    clientflowDescription:
      'A full stack application for managing clients, tasks, and activities. It features JWT authentication, access control, a REST API, and PostgreSQL persistence.',
    clientflowCredentials: 'Demo credentials',
    liveDemo: 'Live application',
    sourceCode: 'Source code',
    status: 'Deployed to production',
    stackLabel: 'TECH STACK',
    skillsLabel: '03 / TECHNOLOGIES',
    skillsTitle: 'Tools I work with',
    skillsText:
      'Technologies used to build web applications and APIs.',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools and infrastructure',
    contactLabel: '04 / CONTACT',
    contactTitle: "Let's build something.",
    contactText:
      "I'm open to professional opportunities, collaborations, and conversations about technology.",
    contactButton: 'Visit my Linkedin',
    footer: 'Built with React, TypeScript, and Tailwind CSS.',
    backTop: 'Back to top ↑',
  },
}

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'REST API', 'JWT'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Prisma ORM', 'SQL', 'Neon'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Render', 'Swagger', 'Jest'],
  },
]

function App() {
  const [language, setLanguage] = useState<Language>('pt')
  const t = content[language]

  const localizedSkills = [
    { title: t.frontend, items: skills[0].items },
    { title: t.backend, items: skills[1].items },
    { title: t.database, items: skills[2].items },
    { title: t.tools, items: skills[3].items },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090f] text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#09090f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="shrink-0 text-lg font-bold tracking-tight text-white"
          >
            giuliano<span className="text-indigo-400">.dev</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#home">
              {t.nav.home}
            </a>
            <a className="transition hover:text-white" href="#about">
              {t.nav.about}
            </a>
            <a className="transition hover:text-white" href="#projects">
              {t.nav.projects}
            </a>
            <a className="transition hover:text-white" href="#skills">
              {t.nav.skills}
            </a>
            <a className="transition hover:text-white" href="#contact">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              aria-pressed={language === 'pt'}
              className={`rounded-full px-3 py-1.5 transition ${
                language === 'pt'
                  ? 'bg-indigo-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`rounded-full px-3 py-1.5 transition ${
                language === 'en'
                  ? 'bg-indigo-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-[650px] scroll-mt-24 items-center px-5 py-24 sm:px-8 lg:min-h-[720px]"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-indigo-600/[0.15] blur-[120px]" />
            <div className="absolute right-[-100px] top-1/2 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          </div>

          <div className="relative mx-auto w-full max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.availability}
            </div>

            <p className="mb-3 text-lg text-slate-400">{t.greeting}</p>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Giuliano <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">Araújo.</span>
            </h1>

            <h2 className="mt-8 text-xl font-medium text-slate-300 sm:text-2xl">
              {t.role}
              <span className="ml-2 text-indigo-400">/</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {t.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                {t.projectsButton}
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/GiulianoMSA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                {t.githubButton}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <a
              href="#about"
              className="mt-20 inline-flex items-center gap-3 text-xs tracking-wide text-slate-500 transition hover:text-slate-300"
            >
              <span className="h-px w-8 bg-indigo-400/60" />
              {t.scroll}
            </a>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-indigo-400">
                {t.aboutLabel}
              </p>
              <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {t.aboutTitle}
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>{t.aboutText}</p>
              <p>{t.aboutExtra}</p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-indigo-400">
              {t.projectsLabel}
            </p>
            <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.projectsTitle}
              </h2>
              <p className="max-w-md text-sm leading-7 text-slate-400">
                {t.projectsText}
              </p>
            </div>

            <article className="group mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e18] transition hover:border-indigo-400/30">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative flex min-h-64 flex-col justify-between overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-indigo-950 via-[#15142b] to-[#0e0e18] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-indigo-300/10" />
                  <div className="pointer-events-none absolute -right-2 top-[-20px] h-48 w-48 rounded-full border border-indigo-300/[0.08]" />

                  <div className="relative">
                    <span className="rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-indigo-300">
                      {t.featured}
                    </span>
                  </div>

                  <div className="relative mt-14">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <div className="ml-3 h-2 w-24 rounded-full bg-white/10" />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0b0b14]/80 p-5 shadow-2xl backdrop-blur">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-lg font-bold text-white">
                          Client<span className="text-indigo-400">Flow</span>
                        </span>
                        <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                          Dashboard
                        </span>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {['Clients', 'Tasks', 'Activities'].map((item, i) => (
                          <div
                            key={item}
                            className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3"
                          >
                            <div className="text-[10px] text-slate-500">
                              {item}
                            </div>
                            <div className="mt-2 text-lg font-semibold text-slate-200">
                              {['24', '12', '38'][i]}
                            </div>
                            <div className="mt-2 h-1 rounded-full bg-indigo-400/50" />
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-2 w-full rounded-full bg-white/[0.05]" />
                        <div className="h-2 w-4/5 rounded-full bg-white/[0.05]" />
                        <div className="h-2 w-3/5 rounded-full bg-white/[0.05]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                      Full Stack
                    </span>
                    <span className="text-xs text-slate-500">{t.status}</span>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">
                    {t.clientflowTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {t.clientflowDescription}
                  </p>
                  <div className="mt-4 rounded-lg border border-white/10 p-4">
                  <h4 className="font-semibold mt-2">
                    {t.clientflowCredentials}
                  </h4>
                  <p className="mt-2 text-sm">
                    <strong>E-mail:</strong> demo@clientflow.app
                  </p>
                  <p className="text-sm">
                    <strong>Password:</strong> ClientFlowDemo2026!
                  </p>
                </div>

                  <p className="mt-7 text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                    {t.stackLabel}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'React',
                      'TypeScript',
                      'NestJS',
                      'Prisma',
                      'PostgreSQL',
                      'Docker',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://clientflow-jnr9.onrender.com/login"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                    >
                      {t.liveDemo} <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://github.com/GiulianoMSA/ClientFlow"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05]"
                    >
                      {t.sourceCode} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-indigo-400">
              {t.skillsLabel}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.skillsTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              {t.skillsText}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {localizedSkills.map((group, index) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-indigo-400/30"
                >
                  <span className="text-xs font-semibold text-indigo-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-2 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-indigo-400/15 bg-gradient-to-br from-indigo-950/60 via-[#10101c] to-[#0e0e16] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[90px]" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-indigo-400">
                {t.contactLabel}
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                {t.contactText}
              </p>
              <a
                href="https://www.linkedin.com/in/giuliano-ara%C3%BAjo-0399ab206/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
              >
                {t.contactButton}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Giuliano Araújo
          </p>
          <p>{t.footer}</p>
          <a className="transition hover:text-white" href="#home">
            {t.backTop}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App