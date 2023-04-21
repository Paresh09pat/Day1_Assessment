import './App.css'
import Home from './components/Home'
import Business from './components/Business'
import Career from './components/Career'
import LatestNews from './components/LatestNews'
import Brand from './components/Brand'

function App() {

  return (
    <div style={{backgroundColor:"black"}}>
     <Home />
     <Business />
     <Career />
     <LatestNews />
     <Brand />
    </div>
  )
}

export default App
