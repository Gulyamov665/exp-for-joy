import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Footer from './components/Footer/Footer'
import Slick from './components/Slick/Slick'
import Test from './components/Testi/Test'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Intro />
      </div>
      <div>
        <Slick />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
