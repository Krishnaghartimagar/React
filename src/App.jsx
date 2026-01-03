
import Home from './pages/Home'
import Footer from './comp/Footer'
import Header from './comp/header'
import A from './pages/A'
import Category from './pages/category'
import Detail from './pages/Detail'
function App() {
  return (
    <div>
      
      <Header/>
      <Routes>
        <route path="/" element={<Home/>}/>
                <route path="/about" element={<About/>}/>
              <route path="/categoty/:categotyId" element={<Category/>}/>
                      <route path="/detail/:id" element={<Detail/>}/>



      </Routes>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
