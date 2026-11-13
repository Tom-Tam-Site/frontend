// import css and styling
import "./App.css";

// import sections
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Footer from "./components/footer/footer";

// import routes
import { Route, Routes } from "react-router-dom";

// import pages
import About from "./pages/about/about";

// import services
import Coaching from "./pages/coaching/coaching";
import SpiritualDevelopment from "./pages/spirituality/spiritual-development";
import News from "./pages/news/news";

function App() {
  return (
    <div className="site-shell">
      <NavigationBar />
      <main className="App">
        <Routes>
          <Route path="/" element={<About />}></Route>

          <Route path="/coaching" element={<Coaching />}></Route>
          <Route
            path="/character-development"
            element={<SpiritualDevelopment />}
          ></Route>
          <Route path="/spirituality" element={<SpiritualDevelopment />}></Route>
          <Route path="/insights" element={<News />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
