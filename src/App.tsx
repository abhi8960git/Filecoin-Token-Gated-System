import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SPLTokenLoginCard from "./pages/TokenGated";

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<SPLTokenLoginCard/>} />
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;
