import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/white-label-msp" element={<whiteLabelMSP/>}/>
        <Route path =""></Route>
        <Route path="/hosting" element={<h1>Hosting Page</h1>} />
        <Route path="/specialty" element={<h1>Specialty Page</h1>} />
        <Route path="/microsoft" element={<h1>Microsoft Page</h1>} />
        <Route path="/security" element={<h1>Security Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;