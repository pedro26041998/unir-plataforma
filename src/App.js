import './App.css';
import Header from "./components/Header/Headers";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import {BrowserRouter, Routes,Route ,} from "react-router-dom";
import {Container} from "@mui/material";
import Trending from "./Pages/Trending/Trending";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <div className="app">
              <Container>
                  <Routes>
                      <Route path="/" element={<Trending/>} exact />
                      <Route path="/movies" element={<Movies/>} />
                      <Route path="/series" element={<Series/>} />
                      <Route path="/search" element={<Search/>} />
                  </Routes>
              </Container>
          </div>
          <SimpleBottomNavigation />
      </BrowserRouter>
  );
}

export default App;
