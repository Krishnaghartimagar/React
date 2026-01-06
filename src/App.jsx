import Header from "./comp/Header"
import Footer from "./comp/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/category"
 
 
import FormA from "./FormA"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"


function App()
{
  return (
    <>
    <FormA />
   
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:categorId" element={<Category/>}/>
      <Route path="/details/:id" element={<Detail/>}/>
      <Route path="/Cart/" element={<Cart />}/>

    </Routes>
    <Footer/> 
    </>
  )
}
export default App