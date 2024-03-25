import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/Routes/AppRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  )
}

export default App