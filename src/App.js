import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './containers/bar/Bar';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Navbar from './containers/navbar/Navbar';
import WomenEmpowerment from './containers/women/WomenEmpoerment';
import ChildCare from './containers/childcare/ChildCare';
import Agriculture from './containers/agri/AgriCulture';
import Contact from './containers/contact/Contact';
import Donate from './containers/donate/Donate';
import Footer from './containers/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Bar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/women-empowerment' exact element={<WomenEmpowerment />} />
          <Route path='/child-care' exact element={<ChildCare />} />
          <Route path='/agri' exact element={<Agriculture />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/donate' exact element={<Donate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
