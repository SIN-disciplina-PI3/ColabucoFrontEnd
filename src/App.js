import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShippingInformations from './components/ShippingInformations';
import Offers from './components/Offers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ShippingInformations />
      <Offers />
    </div>
  );
}

export default App;
