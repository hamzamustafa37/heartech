import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/LandingPage.css";
import "./styles/aboutUs.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Blog from './View/blog';
import BlogDetails from "./View/blogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blogdetails' element={<BlogDetails />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
