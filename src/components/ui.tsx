import type { ReactNode } from 'react';

/** Small building blocks reused across pages. */

// A link to an outside URL. If the value is still a placeholder ("#"), it
// renders as plain text so it can't send visitors to the wrong place.
export function ExtLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const real = /^(https?:|mailto:|tel:)/.test(href);
  if (!real) {
    return (
      <span className={`${className ?? ''} pending`.trim()} title="Link coming soon">
        {children}
      </span>
    );
  }
  const external = href.startsWith('http');
  return (
    <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  );
}

export function scrollToId(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}

// An in-page link ("jump to the Projects section"). The site uses hash-based
// routing, so a normal #anchor link would change the route; this scrolls instead.
export function ScrollLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <a
      className={className}
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(to);
      }}
    >
      {children}
    </a>
  );
}

// A two-column section: label on the left, content on the right.
export function Section({
  id,
  label,
  aside,
  children,
}: {
  id?: string;
  label: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="band">
      <div className="wrap sec">
        <div className="sec-label rise">
          <div className="eyebrow">{label}</div>
          {aside}
        </div>
        <div className="sec-body">{children}</div>
      </div>
    </section>
  );
}

export function Tags({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="tags">
      {items.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}

// Grey box standing in for a photo/video until you drop in the real file.
export function Placeholder({ children, className, style }: { children?: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`ph-box ${className ?? ''}`.trim()} style={style}>
      {children}
    </div>
  );
}

export function PlayBadge() {
  return (
    <span className="play" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
      </svg>
    </span>
  );
}
