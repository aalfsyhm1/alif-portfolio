import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stackSummary, stats } from '../data/profile';
import { useSpotlight } from '../hooks/useSpotlight';
import { ScrollLink } from './ui';

type Cta = { label: string; route?: string; anchor?: string };
type Mode = 'hire' | 'ugc';

// The hero changes its message depending on who is visiting.
const HERO: Record<Mode, { title: string; sub: string; cta: Cta; cta2: Cta }> = {
  hire: {
    title: 'Application developer.\nFinal-year CS at UPM.',
    sub: 'I build enterprise web applications with C#, .NET, React and TypeScript at Lion Group, and I graduate in December 2026. Before that I built Flutter and Java apps on an internship, and AI projects at university.',
    cta: { label: 'See my projects', anchor: 'projects' },
    cta2: { label: 'View CV', route: '/cv' },
  },
  ugc: {
    title: 'Videos that make\npeople book the stay.',
    sub: 'Short vertical videos for resorts, cafés and local brands, posted on your own account.',
    cta: { label: 'Watch UGC work', route: '/ugc' },
    cta2: { label: 'Say hello', anchor: 'contact' },
  },
};

const MODES: { id: Mode; label: string }[] = [
  { id: 'hire', label: 'Hiring a developer' },
  { id: 'ugc', label: 'Booking UGC' },
];

const NAV: { label: string; anchor?: string; route?: string }[] = [
  { label: 'Experience', anchor: 'experience' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Skills', anchor: 'skills' },
  { label: 'Beyond code', anchor: 'beyond' },
  { label: 'Photos', route: '/travel' },
  { label: 'CV', route: '/cv' },
];

function CtaLink({ cta, className }: { cta: Cta; className: string }) {
  return cta.route ? (
    <Link className={className} to={cta.route}>
      {cta.label}
    </Link>
  ) : (
    <ScrollLink className={className} to={cta.anchor ?? 'top'}>
      {cta.label}
    </ScrollLink>
  );
}

export function Hero() {
  const [mode, setMode] = useState<Mode>('hire');
  const spot = useSpotlight<HTMLElement>();
  const copy = HERO[mode];

  return (
    <section id="top" className="hero band" ref={spot.ref} onMouseMove={spot.onMouseMove} onMouseLeave={spot.onMouseLeave}>
      <div className="spot" aria-hidden="true" />
      <div className="wrap hero-inner">
        <header className="nav">
          <ScrollLink className="brand" to="top">
            Alif Syahmi<span className="accent">.</span>
          </ScrollLink>
          <nav aria-label="Main" className="nav-links">
            {NAV.map((n) =>
              n.route ? (
                <Link key={n.label} className="navlink" to={n.route}>
                  {n.label}
                </Link>
              ) : (
                <ScrollLink key={n.label} className="navlink" to={n.anchor ?? 'top'}>
                  {n.label}
                </ScrollLink>
              ),
            )}
            <ScrollLink className="pill" to="contact">
              Contact
            </ScrollLink>
          </nav>
        </header>

        <div className="hero-copy">
          <div className="eyebrow line">Application Developer · Graduating Dec 2026 · Malaysia</div>

          <div className="tabs" role="group" aria-label="What brings you here?">
            <span className="tabs-lead">I'm here to</span>
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`tab ${m.id === mode ? 'on' : ''}`}
                aria-pressed={m.id === mode}
                onClick={() => setMode(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>

          <h1 className="hero-title">{copy.title}</h1>
          <p className="lead">{copy.sub}</p>
          <div className="cta-row">
            <CtaLink cta={copy.cta} className="btn" />
            <CtaLink cta={copy.cta2} className="btn-link" />
          </div>
        </div>

        <div className="facts">
          {stats.map((s) => (
            <div className="fact" key={s.value}>
              <span className="fact-num">{s.value}</span>
              <span className="fact-label">{s.label}</span>
            </div>
          ))}
          <div className="fact">
            <span className="eyebrow">Stack</span>
            <span className="fact-line">{stackSummary[0]}</span>
            <span className="fact-line dim">{stackSummary[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
