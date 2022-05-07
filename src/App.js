import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, NavLink, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavLink>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </NavLink>
        <Footer />
      </Router>
    </div>
  );
}

export default App;