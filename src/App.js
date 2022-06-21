import {
  BrowserRouter,
  Routes,
  Route
  } from "react-router-dom";
import Home from "./components/Home";
import ChinpoTweet from "./components/ChinpoTweet";
import ChinpoFace from "./components/ChinpoFace";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {

  return (
    <BrowserRouter>
      <NavBar />     
      <main className="container mx-autops-3 pb-12">
        <Routes>
          <Route path="/" title="ちんぽの宿" element={<Home />} />
          <Route path="ChinpoTweet" title="俺とお前のちんぽついーと" element={<ChinpoTweet />} />
          <Route path="ChinpoFace" title="お前の顔面は所詮陰茎" element={<ChinpoFace />} />
          <Route path="/*" title="ちんぽを探して。女の子になっちゃう。" element={<NotFound />} />
        </Routes>
      </main>
      <br></br>
      <Footer />
    </BrowserRouter>
  );
}



export default App;