//import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/Header"
import Header from "./components/Header"
import Nav from "./components/Nav";
import C1 from "./components/C1";
import C2 from "./components/C2";
import F1 from "./components/F1"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter,Route,Routes} from "react-router-dom";
import {Home,About} from "./components/F2";
import Nav1 from "./components/Nav1";
import Contact from "./components/Contact";
import {Employee} from "./components/Employee"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav age="20"/>
      <Footer></Footer>
      <div>
        <h1>
          State and props
        </h1>
      </div>
      Hello World!
      <C1 gift="Watch"/>
      <C2/>
      <F1/>
      <h1 class="text-center text-dnger bg-warning">Bootstarp style</h1>
      <HashRouter>
        <Nav1/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </HashRouter>
      {/*
      https://localhost:3000/ -->Home
      https://localhost:3000/about -->About
      https://localhost:3000/contact -->Contact
      */}
      <Employee/>
    </div>
  );
}

export default App;
