import { Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import CarrinhoDeCompras from '../src/pages/CarrinhoDeCompras';
import ProductScreen from "./pages/ProductScreen";
import NewProductPopUp from "./pages/NewProductPopUp";
import Management from "./pages/Management";
import ArtistRegister from './components/ArtistRegister';
import ArtistRegister2 from './components/ArtistRegister2';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route index element={<Home />} />
            <Route path="login" element= {<Login />} />
            <Route path="cadastrocliente" element={<CadastroCliente />} />
            <Route path="carrinho" element={<CarrinhoDeCompras />} />
            <Route path="productscreen" element= {<ProductScreen />} />
            <Route path="newproduct" element={<NewProductPopUp />} />
            <Route path="management" element={<Management/>}></Route>
        </Routes>
    );
}

export default AppRoutes;