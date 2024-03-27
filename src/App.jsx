import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/Routes/AppRouter";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  )
}

export default App