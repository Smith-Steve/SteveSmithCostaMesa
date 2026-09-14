const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

let initialized = false;

export function initGA() {
  if (initialized || !GA_MEASUREMENT_ID || process.env.NODE_ENV !== 'production') {
    return;
  }

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  initialized = true;
}

export function trackPageview(path) {
  if (!initialized || !window.gtag) {
    return;
  }
  window.gtag('event', 'page_view', { page_path: path });
}
