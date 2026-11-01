import { Link } from 'react-router-dom';
import { cvEducation, cvJobs, cvLeadership, cvProjects, cvSkills, cvSummary } from '../data/cv';
import type { CvVariant } from '../data/cv';
import { profile } from '../data/profile';
import { ExtLink } from '../components/ui';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// One A4 page. The same component renders both CV versions; only the
// summary and the skills order change (see data/cv.ts).
export default function Cv({ variant }: { variant: CvVariant }) {
  useDocumentTitle(variant === 'lenovo' ? 'Alif Syahmi — Resume (Lenovo)' : 'Alif Syahmi — Resume');
  const other = variant === 'lenovo' ? { to: '/cv', label: 'General version' } : { to: '/cv/lenovo', label: 'Lenovo version' };

  return (
    <div className="cv-page">
      <div className="cv-toolbar no-print">
        <Link to="/">← Back to site</Link>
        <span className="spacer" />
        <Link to={other.to}>{other.label}</Link>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      <article className="cv-sheet">
        <header className="cv-head">
          <h1>{profile.fullName}</h1>
          <div>
            {profile.location} · {profile.phone} · {profile.email}
          </div>
          <div>
            <ExtLink href={profile.linkedin}>{profile.linkedinLabel}</ExtLink> ·{' '}
            <ExtLink href={profile.github}>{profile.githubLabel}</ExtLink> · {profile.portfolioLabel}
          </div>
        </header>

        <section>
          <h2>Summary</h2>
          <p>{cvSummary(variant)}</p>
        </section>

        <section>
          <h2>Skills</h2>
          {cvSkills(variant).map((s) => (
            <div key={s.label}>
              <strong>{s.label}:</strong> {s.value}
            </div>
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          <div className="cv-stack">
            {cvJobs.map((j) => (
              <div key={j.org}>
                <div className="cv-line">
                  <span>
                    <strong>{j.role}</strong> · {j.org}
                  </span>
                  <span className="cv-date">{j.period}</span>
                </div>
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="cv-stack">
            {cvProjects.map((p) => (
              <div key={p.name}>
                <div className="cv-line">
                  <strong>{p.name}</strong>
                  <span className="cv-date">{p.year}</span>
                </div>
                <ul>
                  <li>{p.text}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Education &amp; certification</h2>
          <div className="cv-line">
            <span>
              <strong>{cvEducation.degree}</strong> · {cvEducation.school} · {cvEducation.cgpa}
            </span>
            <span className="cv-date">{cvEducation.period}</span>
          </div>
          <div>{cvEducation.certification}</div>
          <div>
            <strong>Languages:</strong> {cvEducation.languages}
          </div>
        </section>

        <section>
          <h2>Leadership &amp; achievements</h2>
          <ul>
            {cvLeadership.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
