import { useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

interface FlashMessages {
  success?: string;
  error?: string;
  info?: string;
  warning?: string;
}

interface PageProps {
  flash?: FlashMessages;
}

export default function FlashHandler() {
  const { flash } = usePage<PageProps>().props;

  // Tracks flashes already shown (prevents duplicates)
  const shownRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!flash) return;

    const entries = Object.entries(flash) as [keyof FlashMessages, string][];

    entries.forEach(([type, message]) => {
      if (!message) return;

      const key = `${type}:${message}`;

      // Prevent duplicate toast on navigation
      if (shownRef.current.has(key)) return;

      shownRef.current.add(key);

      toast[type](message);
    });

    // Auto-clear flash from history state (no reload)
    clearFlashFromHistory();
  }, [flash]);

  return null;
}

/**
 * Removes flash from Inertia page props
 * so it doesn't re-trigger on navigation
 */
function clearFlashFromHistory() {
  if (!window.history.state?.page) return;

  const page = window.history.state.page;

  if (page.props?.flash) {
    page.props.flash = {};
    window.history.replaceState(
      { ...window.history.state, page },
      ''
    );
  }
}
