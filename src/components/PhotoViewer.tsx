import { useEffect } from 'react';
import type { Frame } from '../data/photos';

type Props = {
  frame: Frame;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

// Full-screen photo viewer. Esc closes it; the arrow keys step through frames.
export function PhotoViewer({ frame, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label="Photo viewer">
      <button type="button" className="round viewer-close" onClick={onClose} aria-label="Close viewer" autoFocus>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>
      <div className="viewer-img" style={frame.src ? { backgroundImage: `url(${frame.src})` } : { background: frame.tone }}>
        {!frame.src && <>[Photo — full size] {frame.city}</>}
      </div>
      <div className="viewer-bar">
        <div>
          <div className="kicker accent">
            FRAME {frame.no} · {frame.country} · {frame.date}
          </div>
          <div className="viewer-city">{frame.city}</div>
          <div className="viewer-cap">{frame.caption}</div>
        </div>
        <div className="viewer-nav">
          <button type="button" className="round" onClick={onPrev} aria-label="Previous frame">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="round solid" onClick={onNext} aria-label="Next frame">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
