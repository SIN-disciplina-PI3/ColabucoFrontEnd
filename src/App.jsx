import './styles/home.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShippingInformations from './components/ShippingInformations';
import Offers from './components/Offers';
import FeaturedArtists from './components/FeaturedArtists';
import { Center, Box } from '@chakra-ui/react';
import TopSelling from './components/TopSelling';
import Categories from './components/Categories';
import BuyByArtist from './components/BuyByArtist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ShippingInformations />

      <Box w='100%' px='12%'>
        <Offers />
        <Center>
          <FeaturedArtists/>
          <FeaturedArtists/>
        </Center>
        <TopSelling/>
        <Categories/>
        <BuyByArtist/>
      </Box>
      
      <Footer />
    </div>
  );
}

export default App;
