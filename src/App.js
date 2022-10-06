// import css and styling
import "./App.css";
import { Container } from "react-bootstrap";

// import sections
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Footer from "./components/footer/footer";

// import routes
import { Route, Routes } from "react-router-dom";

// import pages
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

// import services
import BusinessConsulting from "./pages/business-consulting/business-consulting";
import ProfessionalDevelopment from "./pages/professional-development/professional-development";
import SpiritualDevelopment from "./pages/spiritual-development/spiritual-development";
import PersonalFinances from "./pages/personal-finances/personal-finances";

// import global events
import Articles from "./pages/global-events/articles/articles";
import Blog from "./pages/global-events/blog/blog";

function App() {
  return (
    <div>
      <NavigationBar />
      <Container className="App">
        <Routes>
          <Route path="/" element={<About />}></Route>

          <Route
            path="/business-consulting"
            element={<BusinessConsulting />}
          ></Route>
          <Route
            path="/personal-couching"
            element={<ProfessionalDevelopment />}
          ></Route>
          <Route
            path="/spiritual-development"
            element={<SpiritualDevelopment />}
          ></Route>
          <Route
            path="/personal-finances"
            element={<PersonalFinances />}
          ></Route>

          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
