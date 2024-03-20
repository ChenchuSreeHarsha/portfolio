import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Navbar from "./components/NavBar/navbar";
import Projects from './components/Projects/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
