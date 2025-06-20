import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Species from "./pages/Species";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Nav from "./components/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavOnLanding = location.pathname === "/";
  return (
    <>
      {!hideNavOnLanding && <Nav />}
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/species' element={<Species />} />
          <Route path='/people' element={<People />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/vehicles' element={<Vehicles />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
