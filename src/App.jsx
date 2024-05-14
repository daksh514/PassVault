import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import WhyPassVault from "./components/WhyPassVault"
import Demo from "./components/Demo"

function App() {

  return (
    <BrowserRouter>
    <div className="h-[300vh] overflow-hidden bg-[#f7fbff]">
      <Header/>
      <WhyPassVault/>
      <Demo/>
    </div>
    </BrowserRouter>
  )
}

export default App
