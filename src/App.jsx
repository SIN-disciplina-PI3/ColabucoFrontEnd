import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import ArtistRegister from "./components/ArtistRegister.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <ArtistRegister />
    </BrowserRouter>
  );
}

export default App;
