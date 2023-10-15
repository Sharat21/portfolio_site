import About from './components/About';
import Copyright from './components/Copyright';
import Experience from './components/Experience';
import HomeBar from './components/HomeBar';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence, motion} from 'framer-motion';
function App() {
  return (
    <div>
      {/* <AnimatePresence initial={false}> */}
        <HomePage />
        <Experience />
        <Projects />
      
        <About />
        <Contact />
        <Copyright />
        <HomeBar />
 
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;