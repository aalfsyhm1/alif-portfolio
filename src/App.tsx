import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Cv from './pages/Cv';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Ugc from './pages/Ugc';

// When you move to another page, start at the top of it.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// HashRouter keeps the page in the URL after a "#" (e.g. /#/travel). That means
// the site works on any static host (GitHub Pages, Netlify, Vercel) with no
// server settings, and refreshing a page never gives a 404.
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ugc" element={<Ugc />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/cv" element={<Cv variant="general" />} />
        <Route path="/cv/lenovo" element={<Cv variant="lenovo" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
