import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-xs text-black/60">Enchantique</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
            Designed to <span className="bg-gradient-to-tr from-[#D4AF37] via-[#F6E6C9] to-[#F5A3B8] bg-clip-text text-transparent">Shine</span>
          </h1>
          <p className="mt-6 text-black/70 max-w-xl">
            A modern luxury beauty house blending high craft with innovation. Minimal forms, maximal glow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#highlights" className="rounded-full bg-black text-white px-5 py-3 text-sm hover:bg-black/90 transition-colors">Explore Collection</a>
            <a href="#instagram" className="rounded-full border border-black/10 px-5 py-3 text-sm hover:bg-black hover:text-white transition-colors">Follow Our World</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
