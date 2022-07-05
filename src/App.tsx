import {
  BrowserRouter,
  Routes,
  Route
  } from "react-router-dom";
import Home from "./components/pages/Home";
import ChinpoTweet from "./components/pages/ChinpoTweet";
import ChinpoFace from "./components/pages/ChinpoFace";
import NavBar from "./components/modules/NavBar";
import Footer from "./components/modules/Footer";
import NotFound from "./components/pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <NavBar />     
      <main className="container mx-autops-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ChinpoTweet"  element={<ChinpoTweet />} />
          <Route path="ChinpoFace" element={<ChinpoFace />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <br></br>
      <Footer />
    </BrowserRouter>
  );
}



export default App;