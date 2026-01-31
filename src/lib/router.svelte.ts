// Hash-based router using Svelte 5 runes

let currentPageId = $state('start');

// Initialize from hash on load
function initFromHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    currentPageId = hash.slice(2);
  } else {
    window.location.hash = '#/start';
  }
}

// Listen for hash changes (back/forward navigation)
if (typeof window !== 'undefined') {
  initFromHash();
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      currentPageId = hash.slice(2);
    }
  });
}

export function navigateTo(pageId: string) {
  window.location.hash = `#/${pageId}`;
  currentPageId = pageId;
}

export function getCurrentPageId(): string {
  return currentPageId;
}

// Export reactive getter for components
export const router = {
  get currentPageId() {
    return currentPageId;
  }
};
