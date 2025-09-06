import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Setting from "./components/Setting";
import Contact from "./components/Contact";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<>ss</>} />
            <Route path="/about" element={<>ee</>} />
            <Route path="/products" element={<>aa</>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
