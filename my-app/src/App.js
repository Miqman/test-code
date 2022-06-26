import { Routes, Route } from "react-router-dom";
import FooterComponents from "./components/FooterComponents";
import NavbarComponent from "./components/NavbarComponent";
import DetailPage from "./views/DetailPage";
import FilmPage from "./views/FilmPage";
import HomePage from "./views/HomePage";
import PeoplePage from "./views/PeoplePage";
import PlanetsPage from "./views/PlanetsPage";

function App() {
  return (
    <div className="">
      <div className="bg-[url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')] h-full w-full object-cover">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/planet" element={<PlanetsPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <FooterComponents />
      </div>
    </div>
  );
}

export default App;
