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
import BusinessConsulting from "./pages/services/business-consulting/business-consulting";
import ProfessionalDevelopment from "./pages/services/professional-development/professional-development";
import SpiritualDevelopment from "./pages/services/spiritual-development/spiritual-development";
import PersonalFinances from "./pages/services/personal-finances/personal-finances";

// import global events
import Articles from "./pages/global-events/articles/articles";
import Blog from "./pages/global-events/blog/blog";

function App() {
  return (
    <div>
      <NavigationBar />
      <Container className="App">
        <Routes>
          {/* about section */}
          <Route path="/" element={<About />}></Route>

          {/* services section  */}
          <Route
            path="/business-consulting"
            element={<BusinessConsulting />}
          ></Route>
          <Route
            path="/professional-development"
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

          {/* global events section */}
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          {/* contact section */}
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
