export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Enchantique — Designed to Shine</h3>
          <p className="mt-3 text-black/70 max-w-md">Join our private list for early drops, studio notes, and invitations.</p>
          <form className="mt-6 flex max-w-md">
            <input type="email" required placeholder="Your email"
              className="flex-1 rounded-l-full border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
            <button type="submit" className="rounded-r-full bg-black text-white px-5 py-3 text-sm hover:bg-black/90">Subscribe</button>
          </form>
        </div>
        <div className="justify-self-end text-sm text-black/60 space-y-2">
          <p>© {new Date().getFullYear()} Enchantique Beauty Co.</p>
          <p>Privacy • Terms • Accessibility</p>
        </div>
      </div>
    </footer>
  );
}
