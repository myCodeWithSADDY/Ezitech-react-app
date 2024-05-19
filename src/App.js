
import './App.css';
import Body from './components/Body';
import Headernav from './components/Headernav';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Section from './components/Section';
import Trend from './components/Trend';
import Courses from './components/Courses';
import Text from './components/Text'
import Cards from './components/Cards';
import Footer from './components/Footer';
import background from './images/background.jpg'

function App() {
  return (
    <div>
    
    <Headernav/>
    <div className="bg-img w-300 p-3"style={{backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundSize:'cover',
    backgroundAttachment: 'fixed',
    overflow: 'hidden',
    backgroundBlendMode: 'overlay',
    
        }}> 
    <Navbar/>
    <br />
    <br />
    <Body/>
    </div>
    <Hero/>
    <br />
    <br />
    <Section/>
    <br />
    <br />
    <Trend/>
    <br />
    <br />
    <Text/>
    <br />
    <Courses/>
    <br />
    <Cards/>
    <br />
    <br />
    <Footer/>
    </div>
    
  );
}

export default App;



