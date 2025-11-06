import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-geist">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
