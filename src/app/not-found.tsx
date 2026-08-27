// Next's built-in not-found renders a white full-height slab that hides the
// footer; this keeps 404s on paper. The wording is Next's own default, which
// is what the site already served here.
export default function NotFound() {
  return (
    <section className="container-editorial flex flex-col gap-4 pb-24 pt-14 lg:gap-5 lg:pb-40 lg:pt-24">
      <h1 className="text-[64px] leading-none tracking-[-0.02em] lg:text-[96px]">404</h1>
      <p className="body-lead">This page could not be found.</p>
    </section>
  );
}
