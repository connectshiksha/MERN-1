
import Info from './components/info'
import AboutUs from './components/AboutUs'
// import Counter  from './components/counter'
import Todo from "./components/Todo"
import Form2 from "./components/Form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RPSGame from './components/gameRPS';
import ImageGallery from "./components/imageGallery"
import Cal from './components/Calculator';

const App = () => {

  return (
    <>
      {/* <h1> My React App </h1> */}
      {/* <Info /> */}
      {/* <AboutUs/> */}
      {/* <Counter/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path='/form' element={<Form2/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/game1' element={<RPSGame/>} />
          <Route path='/images' element={<ImageGallery/>} />
          <Route path='/calculator' element={<Cal/>} />
          <Route path='*' element={ <>
          <h1> Link Not Found </h1>
          </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App