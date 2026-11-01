import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ExtLink, Placeholder, PlayBadge, ScrollLink, Section } from '../components/ui';
import { timeline } from '../data/experience';
import { teaser } from '../data/photos';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import { services, ugcWork } from '../data/ugc';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useSpotlight } from '../hooks/useSpotlight';

function Experience() {
  return (
    <Section
      id="experience"
      label="01 — Experience"
      aside={<Placeholder className="portrait">[Your photo goes here — portrait, 4:5]</Placeholder>}
    >
      <div className="stack-lg">
        <div className="stack rise">
          <h2 className="h2">Hi, I'm Alif Syahmi.</h2>
          <p className="lead narrow">
            I'm an application developer at Lion Group and a Computer Science student at UPM, graduating in December 2026. Outside work I
            travel, film and take photos.
          </p>
        </div>
        <ol className="timeline">
          {timeline.map((t) => (
            <li className="timeline-row rise" key={t.title}>
              <span className={`when ${t.current ? 'accent' : ''}`}>{t.period}</span>
              <div className="timeline-main">
                <strong className="timeline-title">{t.title}</strong>
                <span className="timeline-text">{t.text}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="text-links">
          <Link to="/cv">View CV</Link>
          <ExtLink href={profile.linkedin}>LinkedIn</ExtLink>
          <ExtLink href={profile.github}>GitHub</ExtLink>
          <ExtLink href={profile.tiktok}>TikTok</ExtLink>
          <ExtLink href={profile.instagram}>Instagram</ExtLink>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="02 — IT projects">
      <div className="stack-xl">
        <div className="stack rise">
          <h2 className="h2">Things I've built</h2>
          <p className="lead narrow">AI, web and mobile projects from university, my internship and my own time.</p>
        </div>
        <div className="grid-cards">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="03 — Skills">
      <div className="stack-xl">
        <h2 className="h2 rise">What I work with</h2>
        <div className="grid-skills">
          {skillGroups.map((g) => (
            <div className="rise stack-sm" key={g.title}>
              <h3 className="eyebrow">{g.title}</h3>
              <ul className="plain-list">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function BeyondCode() {
  return (
    <div id="beyond" className="wrap sec sec-intro">
      <div className="sec-label rise">
        <div className="eyebrow">Beyond code</div>
      </div>
      <p className="sec-body lead narrow rise">UGC videos, freelance work and travel photos.</p>
    </div>
  );
}

function Ugc() {
  return (
    <Section id="ugc" label="04 — UGC videos">
      <div className="stack-xl">
        <div className="stack rise narrow-lg">
          <h2 className="h2">Short videos that make people want to book</h2>
          <p className="lead">Brands get content to post on their own accounts. So far I've made videos for two resorts and a food brand.</p>
          <div className="text-link">
            <Link to="/ugc">Full UGC portfolio →</Link>
          </div>
        </div>
        <div className="grid-videos">
          {ugcWork.map((w) => (
            <figure className="card rise video-card" key={w.no}>
              <Placeholder className="vertical">
                {w.media}
                <PlayBadge />
              </Placeholder>
              <figcaption>
                <strong>{w.title}</strong>
                <span>{w.kind}</span>
              </figcaption>
            </figure>
          ))}
          <ScrollLink to="contact" className="card rise slot">
            <span className="eyebrow">04 — open slot</span>
            <span className="slot-title">Your brand could be next →</span>
          </ScrollLink>
        </div>
        <blockquote className="quote rise">
          <p>"[A short line from the resort owner about working with you. Ask them, it's your strongest proof.]"</p>
          <cite>— [Owner name], Santorini Villa &amp; [Ipoh villa]</cite>
        </blockquote>
      </div>
    </Section>
  );
}

function Freelance() {
  return (
    <Section id="services" label="05 — Freelance">
      <div className="stack-xl">
        <div className="stack rise narrow-lg">
          <h2 className="h2">What I can do for you</h2>
          <p className="lead">
            I'm taking on my first freelance clients: small projects, fair intro rates and quick replies. Tell me what you need and I'll send
            a quote.
          </p>
        </div>
        <div className="rows">
          {services.map((s) => (
            <div className="svc rise" key={s.title}>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-text">{s.text}</p>
              {s.to === 'ugc' ? (
                <Link className="text-link-sm" to="/ugc">
                  See how it works →
                </Link>
              ) : (
                <ScrollLink className="text-link-sm" to={s.to}>
                  Get a quote →
                </ScrollLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function PhotosTeaser() {
  return (
    <Section id="photos" label="06 — Off the clock">
      <div className="stack-xl">
        <div className="stack rise narrow-lg">
          <h2 className="h2">10 countries so far.</h2>
          <p className="lead">From Bukittinggi to Istanbul. The photos stay black and white until you hover over them.</p>
          <div className="text-link">
            <Link to="/travel">Open the travel log →</Link>
          </div>
        </div>
        <div className="snap">
          {teaser.map((t) => (
            <div className="bw teaser" style={{ background: t.tone }} key={t.city}>
              [Photo] {t.city}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const pool = useSpotlight<HTMLElement>();
  const rows: { label: string; value: string; href: string; accent?: boolean; internal?: string }[] = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
    { label: 'GitHub', value: profile.githubLabel, href: profile.github },
    { label: 'Resume', value: 'View my CV →', href: '', accent: true, internal: '/cv' },
  ];
  return (
    <section id="contact" className="contact" ref={pool.ref} onMouseMove={pool.onMouseMove} onMouseLeave={pool.onMouseLeave}>
      <div className="pool" aria-hidden="true" />
      <div className="wrap sec contact-inner">
        <div className="sec-label rise">
          <div className="eyebrow">07 — Contact</div>
        </div>
        <div className="sec-body stack-lg">
          <div className="stack rise narrow-lg">
            <h2 className="h2 xl">Let's work together</h2>
            <p className="lead">Whether it's a job, a project or a UGC collab, send me an email and I'll get back to you.</p>
          </div>
          <div className="rows">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="row-label">{r.label}</span>
                  <span className="row-value">{r.value}</span>
                </>
              );
              const cls = `row rise ${r.accent ? 'accent-row' : ''}`;
              return r.internal ? (
                <Link className={cls} to={r.internal} key={r.label}>
                  {inner}
                </Link>
              ) : (
                <ExtLink className={cls} href={r.href} key={r.label}>
                  {inner}
                </ExtLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useDocumentTitle('Alif Syahmi — Application Developer');
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <BeyondCode />
      <Ugc />
      <Freelance />
      <PhotosTeaser />
      <Contact />
      <footer className="wrap footer">
        <span>© 2026 Alif Syahmi</span>
        <span>Designed and built by me.</span>
      </footer>
    </>
  );
}
