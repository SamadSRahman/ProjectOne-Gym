import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Classes from "./Pages/Classes/Classes";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Registration } from "./Pages/Register/Registration";
import Footer from "./Pages/Home/Footer";
import Reviews from './Pages/Review/review'
import { Navbar1 } from "./Components/Navbar/Navbar";
import { Error } from "./Pages/Error Page/Error";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
      
        <Route path="/*" element={<Error/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Registration />} />
          
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
