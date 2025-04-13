import Navbar from './component/navbar/navbar';
import Home from './component/Home/home';
import About from './component/About/about';
import Experience from './component/Experience/Experience';
import Projects from './component/Projects/Projects';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
