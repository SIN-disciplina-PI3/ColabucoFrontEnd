import '../styles/home.css';
import { Center, Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Carousel from '../components/home/Carousel';
import ShippingInformations from '../components/home/ShippingInformations';
import Offers from '../components/home/Offers';
import FeaturedArtists from '../components/home/FeaturedArtists';
import TopSelling from '../components/home/TopSelling';
import Categories from '../components/home/Categories';
import BuyByArtist from '../components/home/BuyByArtist';
import Footer from '../components/Footer';

function Home() {
  return (
    <Box className="content">
      <Navbar />
      <Carousel />
      <ShippingInformations />

      <Box w='100%' px='12%'>
        <Offers />
        <Center>
          <FeaturedArtists />
          <FeaturedArtists />
        </Center>
        <TopSelling />
        <Categories />
        <BuyByArtist />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
