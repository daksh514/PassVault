import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import WhyPassVault from "./components/WhyPassVault"
import Demo from "./components/Demo"
import Privacy from "./components/Privacy"
import Pricing from "./components/Pricing"

function App() {

  return (
    <BrowserRouter>
    <div className="h-[1000vh] overflow-hidden bg-[#f7fbff]">
      <Header/>
      <WhyPassVault/>
      <Demo/>
      <Privacy/>
      <Pricing/>
    </div>
    </BrowserRouter>
  )
}

export default App
