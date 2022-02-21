//import FreeeTrialLessonForm from "./components/FreeeTrialLessonForm";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import Coaches from './pages/Coaches'
import Home from './pages/Home'
import Students from './pages/Students'
import NoPage from './pages/NoPage'
import Footer from './components/Footer';
import './App.css'
import CoachesBio from './pages/CoachesBio'
//import ContactForm from './components/ContactForm';

function App() {
  return (
    //Free trial Lesson form
    // <div className="App">
    // <FreeeTrialLessonForm/>
    // </div>

    //<ContactForm/>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coaches" element={<Coaches/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/coachesBio" element={<CoachesBio/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
