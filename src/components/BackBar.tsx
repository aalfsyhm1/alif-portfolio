import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Top bar for the inner pages: a "back to home" link and one action on the right.
export function BackBar({ action }: { action: ReactNode }) {
  return (
    <header className="wrap topbar">
      <Link className="back" to="/">
        ← Alif Syahmi
      </Link>
      {action}
    </header>
  );
}
