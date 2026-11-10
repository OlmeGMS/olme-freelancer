"use client";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Database,
  Smartphone,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronUp,
  BriefcaseBusiness,
  Globe2,
  Layers3,
  SquareUser,
} from "lucide-react";
import { content, type Locale } from "@/lib/content";

const icons = [Database, Code2, Smartphone, Wrench];
const anchors = ["services", "projects", "experience", "about", "contact"];
const mail = "olme.marin.s@gmail.com";

export default function Portfolio({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const freelanceSubject =
    locale === "es"
      ? "Consulta sobre proyecto freelance"
      : "Freelance project inquiry";
  const careerSubject =
    locale === "es" ? "Oportunidad profesional" : "Career opportunity";
  const mailto = (subject: string) =>
    `mailto:${mail}?subject=${encodeURIComponent(subject)}`;
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <a className="logo" href="#home" aria-label="Olme Marin, home">
            OLME<span>.</span>
          </a>
          <nav
            className={`nav-links ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {anchors.map((id, i) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {t.nav[i]}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              className="lang-switch"
              href={`${bp}/${locale === "es" ? "en" : "es"}/`}
              aria-label={
                locale === "es" ? "Switch to English" : "Cambiar a español"
              }
            >
              <Globe2 size={15} />
              {locale === "es" ? "EN" : "ES"}
            </a>
            <a className="nav-contact" href="#contact">
              {t.nav[4]} <ArrowUpRight size={15} />
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot" />
                {t.availability}
              </div>
              <p className="eyebrow hero-eyebrow">{t.eyebrow}</p>
              <h1>
                {t.heroA}
                <br />
                <span className="gradient-text">{t.heroB}</span>
              </h1>
              <p className="hero-description">{t.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  {t.hire}
                  <ArrowUpRight size={18} />
                </a>
                <a className="btn btn-outline" href="#experience">
                  {t.experienceBtn}
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="code-window">
                <div className="window-head">
                  <span />
                  <span />
                  <span />
                  <em>olme.dev / profile.ts</em>
                </div>
                <div className="code-lines">
                  <p>
                    <b>const</b> developer = {"{"}
                  </p>
                  <p className="indent">
                    <i>name</i>: <strong>'Olme Marin'</strong>,
                  </p>
                  <p className="indent">
                    <i>focus</i>: [<strong>'Full Stack'</strong>,
                  </p>
                  <p className="indent-two">
                    <strong>'iOS'</strong>, <strong>'Backend'</strong>],
                  </p>
                  <p className="indent">
                    <i>experience</i>: <mark>'10+ years'</mark>,
                  </p>
                  <p className="indent">
                    <i>mindset</i>: <strong>'Build with purpose'</strong>
                  </p>
                  <p>{"}"};</p>
                  <p className="code-comment">
                    // Always learning. Always building.
                  </p>
                </div>
              </div>
              <div className="floating-label floating-top">
                <Layers3 size={17} /> Clean architecture
              </div>
              <div className="floating-label floating-bottom">
                <Code2 size={17} /> Built to scale
              </div>
            </div>
            <div className="stats">
              {t.stats.map(([num, label]) => (
                <div className="stat" key={num}>
                  <strong>{num}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHead
              eyebrow={t.servicesEyebrow}
              title={t.servicesTitle}
              description={t.servicesDesc}
            />
            <div className="services-grid">
              {t.services.map(([title, desc, tech], i) => {
                const Icon = icons[i];
                return (
                  <article className="service-card" key={title}>
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>
                    <span className="service-number">0{i + 1} / 04</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="service-tech">{tech}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <SectionHead
              eyebrow={t.workEyebrow}
              title={t.workTitle}
              description={t.workDesc}
            />
            <div className="projects-grid">
              {t.projects.map(([num, category, title, desc, tags], i) => (
                <article className="project-card" key={num}>
                  <div className={`project-art art-${i + 1}`}>
                    <span className="project-art-number">{num}</span>
                    <div className="project-art-icon">
                      {i === 0 ? (
                        <Smartphone size={62} />
                      ) : i === 1 ? (
                        <Globe2 size={62} />
                      ) : (
                        <Layers3 size={62} />
                      )}
                    </div>
                    <div className="project-art-grid" />
                  </div>
                  <div className="project-info">
                    <p className="project-category">{category}</p>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="project-disclaimer">{t.legal}</p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHead eyebrow={t.expEyebrow} title={t.expTitle} />
            <div className="timeline">
              {t.jobs.map(([period, company, role, desc]) => (
                <article className="timeline-item" key={company}>
                  <div className="timeline-date">{period}</div>
                  <div className="timeline-marker" />
                  <div className="timeline-detail">
                    <h3>{company}</h3>
                    <p className="timeline-role">{role}</p>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="container about-layout">
            <div>
              <p className="eyebrow">{t.aboutEyebrow}</p>
              <h2 className="section-title">{t.aboutTitle}</h2>
              <p className="about-text">{t.aboutText}</p>
              <div className="about-links">
                <a href={mailto(careerSubject)} className="text-link">
                  <Mail size={17} /> {mail}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="stack-panel">
              <div className="stack-header">
                <Code2 size={20} />
                <h3>{t.stackTitle}</h3>
              </div>
              {t.stacks.map(([group, ...items]) => (
                <div className="stack-row" key={group}>
                  <span>{group}</span>
                  <div className="stack-tags">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <SectionHead eyebrow={t.processEyebrow} title={t.processTitle} />
            <div className="process-grid">
              {t.process.map(([number, title, desc]) => (
                <article className="process-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-actions">
              <a className="btn btn-light" href={mailto(freelanceSubject)}>
                <BriefcaseBusiness size={18} />
                {t.contactFreelance}
                <ArrowUpRight size={17} />
              </a>
              <a
                className="btn btn-contact-outline"
                href={mailto(careerSubject)}
              >
                <Mail size={18} />
                {t.contactRecruiter}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <p className="contact-email">
              {t.contactNote} <a href={`mailto:${mail}`}>{mail}</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a className="logo" href="#home">
              OLME<span>.</span>
            </a>
            <p>{t.footer}</p>
          </div>
          <div className="footer-right">
            <a href={`mailto:${mail}`} aria-label="Email">
              <Mail size={19} />
            </a>
            <a
              href="https://github.com/olmegms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/olme-marin-sanchez-5640bb57"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (update profile URL)"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="https://olmegms.github.io/my_portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (update profile URL)"
            >
              <SquareUser size={19} />
            </a>
            <a href="#home" aria-label="Back to top">
              <ChevronUp size={19} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} Olme Marin ·{" "}
          {locale === "es"
            ? "Todos los derechos reservados"
            : "All rights reserved"}
        </div>
      </footer>
    </>
  );
}
function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
