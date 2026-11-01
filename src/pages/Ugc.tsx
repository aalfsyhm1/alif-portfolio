import { BackBar } from '../components/BackBar';
import { ExtLink, Placeholder, ScrollLink } from '../components/ui';
import { profile } from '../data/profile';
import { ugcPackages, ugcWhy, ugcWork } from '../data/ugc';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Ugc() {
  useDocumentTitle('Alif Syahmi — UGC portfolio');
  return (
    <>
      <section className="hero band">
        <div className="spot rest-right" aria-hidden="true" />
        <div className="wrap hero-inner">
          <BackBar action={<ScrollLink className="pill" to="book">Work with me</ScrollLink>} />
          <div className="ugc-hero">
            <div className="ugc-copy">
              <div className="eyebrow line">UGC for stays, food &amp; local brands</div>
              <h1 className="hero-title md">Videos your guests would have filmed, only better.</h1>
              <p className="lead">
                I film and edit short vertical videos that you post on your own TikTok, Reels and ads. You own the content and your
                audience sees it. My follower count doesn't come into it.
              </p>
            </div>
            <div className="ugc-clips">
              <Placeholder className="vertical">[Best clip — Santorini Villa]</Placeholder>
              <Placeholder className="vertical drop">[Best clip — Ipoh villa]</Placeholder>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap grid-3 pad-md">
          {ugcWhy.map((w) => (
            <div className="why rise" key={w.no}>
              <div className="eyebrow">{w.no}</div>
              <h3 className="card-title">{w.title}</h3>
              <p className="card-text">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap stack-xl pad-lg">
          <div className="head-row rise">
            <h2 className="h2">Past work</h2>
            <p className="lead head-note">Three collabs so far, with two resorts and a food brand.</p>
          </div>
          <div className="grid-work">
            {ugcWork.map((w) => (
              <article className="card rise work-card" key={w.no}>
                <Placeholder className="vertical">{w.media}</Placeholder>
                <div className="kicker">
                  {w.no} · {w.meta}
                </div>
                <h3 className="card-title lg">{w.title}</h3>
                <p className="card-text">{w.blurb}</p>
                <dl className="facts-2">
                  <div>
                    <dt>Collab</dt>
                    <dd>{w.collab}</dd>
                  </div>
                  <div>
                    <dt>Views</dt>
                    <dd>{w.views}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stack-xl pad-lg">
          <div className="head-row rise">
            <h2 className="h2">Ways to work together</h2>
            <p className="lead head-note">
              I'm open to paid work and to hosted stays or product swaps. Tell me about your brand and I'll suggest what fits.
            </p>
          </div>
          <div className="grid-pack">
            {ugcPackages.map((p) => (
              <div className={`card rise pack ${p.highlight ? 'hot' : ''}`} key={p.title}>
                <h3 className="card-title lg">{p.title}</h3>
                <ul className="bullets">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <ScrollLink className="pack-link" to="book">
                  Ask for a quote →
                </ScrollLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="contact">
        <div className="pool" aria-hidden="true" />
        <div className="wrap cta-band">
          <h2 className="h2 rise cta-title">Run a stay, café or brand? Let's make something people want to book.</h2>
          <div className="cta-row">
            <a className="btn" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <ExtLink className="btn-link" href={profile.whatsapp}>
              {profile.whatsappLabel}
            </ExtLink>
          </div>
        </div>
      </section>
    </>
  );
}
