import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from './pages/MainPage';
import { Navbar } from "./components/Navbar";
import { SignIn } from "./pages/SignIn";
import { Sub } from "./pages/Sub";
import { Dub } from "./pages/Dub";
import { Chinese } from "./pages/Chinese";
import { Trending } from "./pages/Trending";
import { All } from "./pages/All";

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/all" element={ <All/>}/>
        <Route path="/sub" element={ <Sub/>}/>
        <Route path="/dub" element={ <Dub/>}/>
        <Route path="/chinese" element={ <Chinese/>}/>
        <Route path="/trending" element={ <Trending/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}
