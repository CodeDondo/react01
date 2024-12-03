import './App.scss'
import { Header } from './Components/Header/Header.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import {Main} from './Components/Main.jsx'
import {NavBar} from './Components/NavBar/NavBar.jsx'
import {Button} from './Components/Button/Button.jsx'
  const App = () => {
    return (
      <>
      <Header />
      <NavBar />
      <p> Hej Verden</p>
      <Main />
      <Button textValue="Køb" />
      <Footer />
      </>
    )
  }
export default App
