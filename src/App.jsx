
import Home from "./pages/Home"
import Footer from "./comp/Footer"
import Header from "./comp/header"
import A from "./pages/A"
import Category from "./pages/category"
import Detail from "./pages/Detail"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import C from "./pages/c"




function App() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
        <E/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<A />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
