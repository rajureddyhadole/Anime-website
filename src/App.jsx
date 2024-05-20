import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from './pages/MainPage';
import { Navbar } from "./components/Navbar";
import { SignIn } from "./pages/SignIn";

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
