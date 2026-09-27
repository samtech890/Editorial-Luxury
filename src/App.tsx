import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = ['WORK', 'STUDIO', 'SERVICES', 'JOURNAL'];

const projects = [
  {
    id: '01',
    category: 'DIGITAL EXPERIENCE',
    title: 'ORBITAL HOUSE',
    description: 'An immersive digital identity for a modern architecture studio.',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    layout: 'left' as const,
  },
  {
    id: '02',
    category: 'WEB PLATFORM',
    title: 'MONUMENT',
    description: 'A refined digital platform for an independent creative brand.',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    layout: 'right' as const,
  },
  {
    id: '03',
    category: 'PRODUCT DESIGN',
    title: 'FORMA',
    description: 'A digital product built around simplicity and human interaction.',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
    layout: 'center' as const,
  },
];

const services = [
  {
    number: '01',
    title: 'DIGITAL DESIGN',
    description: 'Creative interfaces and visual systems.',
  },
  {
    number: '02',
    title: 'WEB DEVELOPMENT',
    description: 'Modern websites and digital experiences.',
  },
  {
    number: '03',
    title: 'PRODUCT DESIGN',
    description: 'Thoughtful digital products built around users.',
  },
  {
    number: '04',
    title: 'CREATIVE DIRECTION',
    description: 'Visual identity and digital storytelling.',
  },
  {
    number: '05',
    title: 'INTERACTIVE EXPERIENCES',
    description: 'Memorable web interactions and experiences.',
  },
];

const journalEntries = [
  {
    id: '01',
    category: 'DESIGN NOTES',
    title: 'WHY DIGITAL DESIGN IS BECOMING MORE HUMAN',
    date: 'APR 16 / 2026',
  },
  {
    id: '02',
    category: 'PROCESS',
    title: 'BUILDING WITH LESS',
    date: 'APR 03 / 2026',
  },
  {
    id: '03',
    category: 'STUDIO JOURNAL',
    title: 'THE ART OF A QUIET INTERFACE',
    date: 'MAR 27 / 2026',
  },
];

const blocks = [
  { name: 'FORM', color: 'bg-burgundy', opacity: 'bg-white/10' },
  { name: 'IDEAS', color: 'bg-terracotta', opacity: 'bg-white/10' },
  { name: 'SYSTEMS', color: 'bg-forest', opacity: 'bg-white/10' },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
        <nav className="section-shell flex items-center justify-between py-5 md:py-6">
          <a href="#top" className="text-[0.9rem] font-semibold tracking-[0.36em] text-charcoal">
            MONUMENT
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-charcoal/75 transition hover:text-charcoal"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-charcoal md:flex"
          >
            CONTACT <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-charcoal/15 p-2 md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-charcoal/10 bg-ivory md:hidden">
            <div className="section-shell flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <Hero />
        <ColorStrip />
        <About />
        <Projects />
        <Quote />
        <Services />
        <Journal />
        <ColorBlocks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="section-shell pb-20 pt-10 md:pb-24 md:pt-14">
      <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-xl"
        >
          <p className="eyebrow mb-7 text-charcoal/75">CREATIVE DIGITAL STUDIO / 2026</p>
          <h1 className="font-display text-[3.5rem] leading-[0.82] tracking-[-0.06em] text-charcoal md:text-[6rem] xl:text-[7.2rem]">
            WE CREATE
            <br />
            DIGITAL
            <br />
            EXPERIENCES
            <br />
            WITH CHARACTER.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-charcoal/75 md:text-lg">
            We combine technology, design, and storytelling to create memorable digital experiences.
          </p>
          <div className="mt-9 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-burgundy px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-[#492628]"
            >
              EXPLORE OUR WORK <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.35rem] border border-charcoal/10 bg-sand shadow-soft sm:rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
              alt="Architectural editorial photograph"
              className="h-[420px] w-full object-cover grayscale-[10%] sm:h-[540px] md:h-[680px]"
            />
          </div>
          <div className="mt-4 border-t border-charcoal/15 pt-4">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-charcoal/65">
              FIG. 01 — DIGITAL FORM
            </p>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-charcoal/55">
              STUDIO ARCHIVE / 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ColorStrip() {
  return (
    <section className="bg-burgundy py-10 text-ivory md:py-14">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-4"
        >
          <p className="font-display text-[3rem] leading-none tracking-[-0.06em] md:text-[6rem]">
            FORM.
            <br className="hidden md:block" />
            FUNCTION.
            <br className="hidden md:block" />
            STORY.
          </p>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-ivory/80">
            DIGITAL DESIGN / DEVELOPMENT / DIRECTION
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="studio" className="section-shell py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.4fr_1.1fr] md:gap-14">
        <div className="pt-3">
          <p className="eyebrow">01 / THE STUDIO</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <h2 className="font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-charcoal md:text-[5rem]">
            WE BELIEVE
            <br />
            DIGITAL SHOULD
            <br />
            FEEL HUMAN.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-charcoal/75 md:text-lg">
            We build websites and digital products that combine thoughtful design, clear storytelling, and modern technology.
          </p>

          <div className="mt-10 space-y-6 border-t border-charcoal/10 pt-6">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-charcoal/55">EST. 2026</p>
              </div>
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-charcoal/55">DIGITAL STUDIO</p>
              </div>
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-charcoal/55">GLOBAL PRACTICE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section-shell py-8 md:py-14">
      <div className="mb-10 flex items-end justify-between gap-8 border-b border-charcoal/10 pb-4 md:mb-16">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2 className="font-display text-[2.5rem] leading-none tracking-[-0.05em] text-charcoal md:text-[4rem]">
          RECENT STORIES
        </h2>
      </div>

      <div className="space-y-10 md:space-y-16">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={project.layout === 'center' ? 'mx-auto max-w-5xl' : ''}
          >
            {project.layout === 'left' && (
              <div className="grid items-center gap-8 md:grid-cols-[1.45fr_0.85fr] md:gap-12">
                <div className="overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-sand shadow-soft">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[380px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[500px]"
                  />
                </div>
                <div className="space-y-5">
                  <p className="eyebrow">{project.id} / {project.category}</p>
                  <h3 className="font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-charcoal md:text-[4rem]">
                    {project.title}
                  </h3>
                  <p className="max-w-sm text-base leading-7 text-charcoal/70">{project.description}</p>
                  <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/60">YEAR</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-charcoal/80">{project.year}</p>
                  </div>
                </div>
              </div>
            )}

            {project.layout === 'right' && (
              <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.45fr] md:gap-12">
                <div className="space-y-5 order-2 md:order-1">
                  <p className="eyebrow">{project.id} / {project.category}</p>
                  <h3 className="font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-charcoal md:text-[4rem]">
                    {project.title}
                  </h3>
                  <p className="max-w-sm text-base leading-7 text-charcoal/70">{project.description}</p>
                  <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/60">YEAR</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-charcoal/80">{project.year}</p>
                  </div>
                </div>
                <div className="order-1 overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-sand shadow-soft md:order-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[380px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[500px]"
                  />
                </div>
              </div>
            )}

            {project.layout === 'center' && (
              <div className="space-y-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="eyebrow">{project.id} / {project.category}</p>
                    <h3 className="mt-4 font-display text-[2.5rem] leading-[0.9] tracking-[-0.05em] text-charcoal md:text-[4.5rem]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="max-w-md text-base leading-7 text-charcoal/70 md:text-lg">
                    {project.description}
                  </div>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-sand shadow-soft">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.03] md:h-[560px]"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/60">YEAR</p>
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-charcoal/80">{project.year}</p>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="bg-forest py-16 text-ivory md:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="space-y-8"
        >
          <p className="font-display text-[2.7rem] leading-[0.8] tracking-[-0.06em] md:text-[5.4rem]">
            THE BEST DIGITAL
            <br />
            EXPERIENCES DON&apos;T
            <br />
            SHOUT.
            <br />
            THEY STAY WITH YOU.
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/80">— MONUMENT STUDIO</p>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell py-16 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="eyebrow">03 / WHAT WE DO</p>
        <h2 className="mt-4 font-display text-[2.6rem] leading-[0.9] tracking-[-0.05em] text-charcoal md:text-[4rem]">
          OUR PRACTICE
        </h2>
      </div>

      <div className="space-y-0">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            whileHover={{ x: 6 }}
            className="group border-t border-charcoal/10 py-5 md:py-7"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-charcoal/50">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-[1.7rem] font-medium tracking-[-0.06em] text-charcoal transition md:text-[2.5rem] group-hover:text-burgundy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/65 md:text-base">{service.description}</p>
                </div>
              </div>
              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-ivory md:flex">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" className="section-shell py-16 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="eyebrow">04 / JOURNAL</p>
        <h2 className="mt-4 font-display text-[2.7rem] leading-[0.9] tracking-[-0.05em] text-charcoal md:text-[4rem]">
          FROM THE STUDIO
        </h2>
      </div>

      <div className="space-y-4">
        {journalEntries.map((entry, index) => (
          <motion.article
            key={entry.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className={`grid items-center gap-4 border border-charcoal/10 px-5 py-6 transition md:grid-cols-[0.12fr_0.7fr_0.18fr_0.08fr] md:px-8 ${
              index % 2 === 0 ? 'bg-[#f2eadf]' : 'bg-[#e7ddd0]'
            }`}
          >
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-charcoal/55">{entry.id}</p>
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-charcoal/55">{entry.category}</p>
              <h3 className="mt-3 font-display text-[2rem] leading-[0.9] tracking-[-0.04em] text-charcoal md:text-[3rem]">
                {entry.title}
              </h3>
            </div>
            <p className="text-[0.66rem] uppercase tracking-[0.2em] text-charcoal/55 md:text-right">{entry.date}</p>
            <div className="flex justify-end text-charcoal/80">
              <ArrowUpRight size={18} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ColorBlocks() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid overflow-hidden rounded-[1.5rem] border border-charcoal/10 md:grid-cols-3">
        {blocks.map((block, index) => (
          <motion.div
            key={block.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className={`${block.color} relative h-[220px] p-6 md:h-[320px]`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_45%)]" />
            <div className="relative flex h-full items-end justify-start">
              <span className="font-display text-[2.6rem] leading-none tracking-[-0.06em] text-ivory md:text-[4rem]">
                {block.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="section-shell pb-16 pt-8 md:pb-24 md:pt-16">
      <div className="rounded-[2rem] border border-charcoal/10 bg-[#f4ece4] px-6 py-12 md:px-10 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <p className="eyebrow">LET&apos;S CREATE / 05</p>
          <h2 className="mt-6 font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-charcoal md:text-[5rem]">
            HAVE AN IDEA
            <br />
            WORTH BUILDING?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-charcoal/75 md:text-lg">
            Let&apos;s turn your idea into a digital experience with clarity, character, and purpose.
          </p>
          <div className="mt-8">
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-full bg-burgundy px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory transition hover:-translate-y-0.5 hover:bg-[#492628]"
            >
              START A PROJECT <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-[#f4ece4]">
      <div className="section-shell grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr_0.7fr] md:py-12">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-charcoal">MONUMENT</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-charcoal/70">
            Digital design / Development / Direction
          </p>
        </div>

        <div>
          <ul className="space-y-3 text-[0.72rem] uppercase tracking-[0.24em] text-charcoal/75">
            <li><a href="#work">WORK</a></li>
            <li><a href="#studio">STUDIO</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#journal">JOURNAL</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>

        <div className="md:text-right">
          <ul className="space-y-3 text-[0.72rem] uppercase tracking-[0.24em] text-charcoal/75">
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
          </ul>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-3 border-t border-charcoal/10 py-5 text-[0.66rem] uppercase tracking-[0.22em] text-charcoal/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 MONUMENT STUDIO</p>
        <p>MADE WITH INTENTION.</p>
      </div>
    </footer>
  );
}

export default App;
