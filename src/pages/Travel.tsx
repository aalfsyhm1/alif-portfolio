import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackBar } from '../components/BackBar';
import { PhotoViewer } from '../components/PhotoViewer';
import { countries, frames } from '../data/photos';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const STRIP = 'MALAYSIA · SINGAPORE · INDONESIA · THAILAND · VIETNAM · LAOS · CAMBODIA · TAIWAN · CHINA · TÜRKIYE · ROLL 01 ·';

export default function Travel() {
  useDocumentTitle('Alif Syahmi — Travel log');
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState<number | null>(null);

  const shown = filter === 'All' ? frames : frames.filter((f) => f.country === filter);
  const openFrame = open === null ? null : frames[open];

  // Step through the frames currently shown (respects the active filter).
  const step = (dir: number) => {
    if (open === null) return;
    const list = shown.some((f) => f.id === open) ? shown : frames;
    const i = list.findIndex((f) => f.id === open);
    setOpen(list[(i + dir + list.length) % list.length].id);
  };

  const filters = ['All', ...countries];
  const countFor = (c: string) => (c === 'All' ? frames.length : frames.filter((f) => f.country === c).length);

  return (
    <>
      <BackBar
        action={
          <button type="button" className="pill btn-icon" onClick={() => setOpen(Math.floor(Math.random() * frames.length))}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 3h5v5" />
              <path d="M4 20L21 3" />
              <path d="M21 16v5h-5" />
              <path d="M15 15l6 6" />
              <path d="M4 4l5 5" />
            </svg>
            Shuffle a frame
          </button>
        }
      />

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{STRIP}</span>
          <span>{STRIP}</span>
        </div>
      </div>

      <section className="hero">
        <div className="spot rest-right" aria-hidden="true" />
        <div className="wrap travel-intro">
          <div className="stack-lg travel-copy">
            <div className="eyebrow line">Travel log · lep goes</div>
            <h1 className="hero-title xl">Off the clock.</h1>
            <p className="lead">
              I've been from Bukittinggi to Istanbul, and across Vietnam from south to north. Shot on [CAMERA / PHONE]. Each frame stays
              black and white until you hover over it or tap it.
            </p>
          </div>
          <dl className="counts">
            <div>
              <dt>COUNTRIES</dt>
              <dd>{countries.length}</dd>
            </div>
            <div>
              <dt>STOPS</dt>
              <dd>{frames.length}</dd>
            </div>
            <div>
              <dt>HOME</dt>
              <dd>MY</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="wrap filters" role="group" aria-label="Filter by country">
        {filters.map((c) => (
          <button key={c} type="button" className={`tab ${c === filter ? 'on' : ''}`} aria-pressed={c === filter} onClick={() => setFilter(c)}>
            {c} <span className="count">{countFor(c)}</span>
          </button>
        ))}
      </div>

      <section className="wrap sheet-wrap" aria-label="Contact sheet">
        <div className="sheet">
          {shown.map((f) => (
            <button
              type="button"
              className="frame"
              key={f.id}
              onClick={() => setOpen(f.id)}
              aria-label={`Open frame ${f.no}, ${f.city}, ${f.country}`}
            >
              <div className="frame-clip">
                <div
                  className="ph"
                  style={f.src ? { backgroundImage: `url(${f.src})`, backgroundSize: 'cover' } : { background: f.tone }}
                >
                  {!f.src && <>[Photo] {f.city}</>}
                </div>
              </div>
              <div className="frame-meta">
                <span>▸ {f.no}</span>
                <span className="dim">{f.city}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="band top">
        <div className="wrap cta-band">
          <p className="cta-title light">Like how I see places? I shoot them for brands too.</p>
          <Link className="btn" to="/ugc">
            See my UGC work →
          </Link>
        </div>
      </section>

      {openFrame && <PhotoViewer frame={openFrame} onClose={() => setOpen(null)} onPrev={() => step(-1)} onNext={() => step(1)} />}
    </>
  );
}
