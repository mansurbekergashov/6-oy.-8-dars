import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import MeetDirectors from "./components/MeetDirectors";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    // <BrowserRouter>
      // <Header />
      <div>
        {/* <Routes> */}
          <Home />
          {/* <About/> */}
          {/* <MeetDirectors/> */}
          {/* <Contact/> */}
          
        {/* </Routes> */}
      </div>
    // </BrowserRouter>
  );
}
