import './App.css';
import Experiences from './Components/Experiences';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div >
      <Header/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
