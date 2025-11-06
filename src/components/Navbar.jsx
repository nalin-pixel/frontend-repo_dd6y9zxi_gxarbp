import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-tr from-[#F5E7EA] via-white to-[#D4AF37] border border-black/10" />
          <span className="font-semibold tracking-wide uppercase">Enchantique</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#highlights" className="hover:text-black/70 transition-colors">Highlights</a>
          <a href="#instagram" className="hover:text-black/70 transition-colors">Instagram</a>
          <a href="#contact" className="hover:text-black/70 transition-colors">Contact</a>
          <a href="#" className="rounded-full border border-black/10 px-4 py-2 hover:bg-black hover:text-white transition-colors">Shop</a>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(v => !v)}>
          <span className="block w-6 h-[2px] bg-black mb-1" />
          <span className="block w-6 h-[2px] bg-black mb-1" />
          <span className="block w-6 h-[2px] bg-black" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm">
            <a onClick={() => setOpen(false)} href="#highlights" className="py-2 border-b border-black/10">Highlights</a>
            <a onClick={() => setOpen(false)} href="#instagram" className="py-2 border-b border-black/10">Instagram</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 border-b border-black/10">Contact</a>
            <a onClick={() => setOpen(false)} href="#" className="py-2">Shop</a>
          </div>
        </div>
      )}
    </header>
  );
}
