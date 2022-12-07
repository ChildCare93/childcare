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
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';
import TnC from './components/terms&Conditions/TnC';
import RefundPolicy from './components/refundpolicy/RefundPolicy';

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
          <Route path='/contact-us' exact element={<Contact />} />
          <Route path='/donate' exact element={<Donate />} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy />} />
          <Route path='/refund-policy' exact element={<RefundPolicy />} />
          <Route path='/terms-&-conditions' exact element={<TnC />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
