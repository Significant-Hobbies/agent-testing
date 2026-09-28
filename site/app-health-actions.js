document.addEventListener('click', (event) => {
  const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
  if (!link) return;
  const path = new URL(link.href, location.href).pathname;
  if (path === '/tools') window.appHealth?.track('tools_catalog_opened');
  if (path === '/experiments') window.appHealth?.track('experiment_results_opened');
  if (path === '/tools' || path === '/experiments') window.appHealth?.flush?.();
});
