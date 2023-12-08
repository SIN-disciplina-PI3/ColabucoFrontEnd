import { Routes, Route } from "react-router-dom";
import App from './App';
<<<<<<< Updated upstream
import VisualArtsCategory from './pages/VisualArtsCategory';
import MusicCategory from './pages/MusicCategory';
import LiteratureCategory from './pages/LiteratureCaterory';
import CraftmanshipCategory from './pages/CraftsmanshipCategory';
import CinemaCategory from './pages/CinemaCategory';
=======
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import CarrinhoDeCompras from '../src/pages/CarrinhoDeCompras';
import ProductScreen from "./pages/ProductScreen";
import NewProductPopUp from "./pages/NewProductPopUp";
>>>>>>> Stashed changes

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
<<<<<<< Updated upstream
            <Route index element={<VisualArtsCategory />} />
            <Route path="music" element={<MusicCategory />} />
            <Route path="literature" element={<LiteratureCategory />} />
            <Route path="craftmanship" element={<CraftmanshipCategory />} />
            <Route path="cinema" element={<CinemaCategory />} />
=======
            <Route index element={<Home />} />
            <Route path="login" element= {<Login />} />
            <Route path="cadastrocliente" element={<CadastroCliente />} />
            <Route path="carrinho" element={<CarrinhoDeCompras />} />
            <Route path="productscreen" element= {<ProductScreen />} />
            <Route path="newproduct" element={<NewProductPopUp />} />
            
>>>>>>> Stashed changes
        </Routes>
    );
}

export default AppRoutes;