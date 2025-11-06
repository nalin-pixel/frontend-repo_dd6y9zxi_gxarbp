import { useEffect, useState } from 'react';

// Placeholder feed using curated images; in a real app, wire to Instagram Basic Display API via backend.
const images = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508182311256-e3f9f3aee159?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594737625785-c6683fc25d4a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop'
];

export default function InstagramFeed() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    // Smooth mount animation
    const id = setTimeout(() => {}, 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="instagram" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">From our world</h2>
            <p className="mt-3 text-black/70 max-w-xl">A living moodboard. Tag us to be featured — #DesignedToShine.</p>
          </div>
          <a href="#" className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">Follow @Enchantique</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-black/5">
              <img
                src={src}
                alt="Enchantique Instagram"
                className={`h-full w-full object-cover transition-transform duration-700 ${loaded > i ? 'scale-100' : 'scale-105'}`}
                onLoad={() => setLoaded(l => l + 1)}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
