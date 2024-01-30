import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import About from './components/About/About';
import Contact from './components/Contacts/Contacts';
// import VerticalLinearStepper from './components/Stepper';
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Main/> */}
      {/* <VerticalLinearStepper/> */}
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="Product" element={ <Product/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}
export default App;
