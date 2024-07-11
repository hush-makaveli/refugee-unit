import FirstPage from "./component/FirstPage"
import About from "./component/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Contact from "./component/Contact"
import Service from "./component/Service"
import Footer from "./component/Footer"

function App() {
  

  return (
    <>
    <Header />
    <FirstPage />
    <About />
    <Service />
    <Contact />
    <Footer />
    </>
  )
}

export default App
