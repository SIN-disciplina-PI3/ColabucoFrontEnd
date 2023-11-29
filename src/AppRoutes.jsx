import { Routes, Route } from "react-router-dom";
import App from './App';
import VisualArtsCategory from './pages/VisualArtsCategory';
import LiteratureCategory from './pages/LiteratureCaterory';
import CraftmanshipCategory from './pages/CraftsmanshipCategory';
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import CarrinhoDeCompras from '../src/pages/CarrinhoDeCompras';

function AppRoutes(){
    return(
        <Routes>
            
            <Route path="/" element={<App />}></Route>
            <Route index element={<VisualArtsCategory />} />
            <Route path="literature" element={<LiteratureCategory />} />
            <Route path="craftmanship" element={<CraftmanshipCategory />} />
            <Route path="login" element= {<Login />} />
            <Route path="cadastrocliente" element={<CadastroCliente />} />
            <Route path="carrinho" element={<CarrinhoDeCompras />} />
            
        </Routes>
    );
}

export default AppRoutes;