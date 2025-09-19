import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
