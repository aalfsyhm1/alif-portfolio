import { useEffect } from 'react';

// Sets the browser tab title while a page is on screen.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
