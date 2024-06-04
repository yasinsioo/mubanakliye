import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact.jsx";
import Home from "./Components/Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
