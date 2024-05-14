import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import WhyPassVault from "./components/WhyPassVault"
import Demo from "./components/Demo"
import Privacy from "./components/Privacy"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
    <div className=" overflow-hidden bg-[#f7fbff]">
      <Header/>
      <WhyPassVault/>
      <Demo/>
      <Privacy/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
