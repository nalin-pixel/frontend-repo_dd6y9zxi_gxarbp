import { Sparkles, Droplet, Shield } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Radiant Finishes',
    desc: 'Soft-focus luminosity with photo-ready diffusion. A glow that feels like glass.'
  },
  {
    icon: Droplet,
    title: 'Skin-Loving Formulas',
    desc: 'Clean, high-performance ingredients that cushion and nourish.'
  },
  {
    icon: Shield,
    title: 'Thoughtful Design',
    desc: 'Engineered for elegance with refillable, low-waste packaging.'
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Pieces that elevate the ritual</h2>
            <p className="mt-3 text-black/70 max-w-xl">Modular essentials crafted to slip into your day — considered, precise, quietly iconic.</p>
          </div>
          <a href="#" className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">Shop all</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-3xl border border-black/10 bg-white p-6 overflow-hidden shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(800px 300px at 0% 0%, rgba(212,175,55,0.15), transparent 60%)' }} />
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-black/5 p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{title}</h3>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </div>
              </div>
              <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-black/60">Sculpted minimalism</span>
                <button className="rounded-full px-3 py-1 border border-black/10 hover:bg-black hover:text-white transition-colors">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
