import { Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import CarrinhoDeCompras from '../src/pages/CarrinhoDeCompras';
import ProductScreen from "./pages/ProductScreen";
import NewProductPopUp from "./pages/NewProductPopUp";
import AboutColabuco from "./pages/AboutColabuco";
import ArtistProfile from "./pages/ArtistProfile";
import ClientProfile from "./pages/ClientProfile";
import AllArtists from "./pages/AllArtists";
import AllProducts from "./pages/AllProducts";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route index element={<Home />} />
            <Route path="login" element= {<Login />} />
            <Route path="cadastrocliente" element={<CadastroCliente />} />
            <Route path="sobrecolabuco" element={<AboutColabuco />} />
            <Route path="carrinho" element={<CarrinhoDeCompras />} />
            <Route path="produto" element= {<ProductScreen />} />
            <Route path="newproduct" element={<NewProductPopUp />} />
            <Route path="perfilartista" element={<ArtistProfile/>}></Route>
            <Route path="perfilcliente" element={<ClientProfile/>}></Route>
            <Route path="todosartistas" element={<AllArtists/>}></Route>
            <Route path="todosprodutos" element={<AllProducts/>}></Route>
        </Routes>
    );
}

export default AppRoutes;