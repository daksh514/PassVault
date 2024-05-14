import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import WhyPassVault from "./components/WhyPassVault"
import Demo from "./components/Demo"
import Privacy from "./components/Privacy"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"

function App() {

  return (
    <BrowserRouter>
    <div className="h-[1000vh] overflow-hidden bg-[#f7fbff]">
      <Header/>
      <WhyPassVault/>
      <Demo/>
      <Privacy/>
      <Pricing/>
      <FAQ/>
    </div>
    </BrowserRouter>
  )
}

export default App
