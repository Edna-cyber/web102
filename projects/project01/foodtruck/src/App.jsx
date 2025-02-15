import './App.css'
import RedBanner from './assets/Red_Banner.png'
import Gallery from './components/Gallery.jsx'

const App = () => {

    return (
      <div className="container">
          <img src={RedBanner} class="redBanner" alt="Red Banner"></img>
          <h1>Food Truck Favorites</h1>
          <Gallery />
      </div>
    )
  }

export default App
