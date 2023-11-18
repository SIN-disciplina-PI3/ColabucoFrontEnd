import { Routes, Route } from "react-router-dom";
import App from './App';
import VisualArtsCategory from './pages/VisualArtsCategory';
import MusicCategory from './pages/MusicCategory';
import LiteratureCategory from './pages/LiteratureCaterory';
import CraftmanshipCategory from './pages/CraftsmanshipCategory';
import CinemaCategory from './pages/CinemaCategory';
import Login from './pages/Login';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route index element={<VisualArtsCategory />} />
            <Route path="music" element={<MusicCategory />} />
            <Route path="literature" element={<LiteratureCategory />} />
            <Route path="craftmanship" element={<CraftmanshipCategory />} />
            <Route path="cinema" element={<CinemaCategory />} />
            <Route path="login" element= {<Login />} />
            
        </Routes>
    );
}

export default AppRoutes;