import './App.scss'
import { Header } from './Components/Header/Header.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import {Main} from './Components/Main.jsx'
import {NavBar} from './Components/NavBar/NavBar.jsx'

  const App = () => {
    return (
      <>
      <Header />
      <NavBar />
      <p> Hej Verden</p>
      <Main />
      <Footer />
      </>
    )
  }
export default App
