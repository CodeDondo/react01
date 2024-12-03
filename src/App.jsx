import './App.scss';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { Main } from './Components/Main.jsx';
import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Button } from './Components/Button/Button.jsx';

const App = () => {
  // Definer dine livretter
  const myFavoriteDishes = ["Pizza", "Sushi", "Pasta", "Burger", "Tacos"];

  return (
    <>
      <Header />
      <NavBar />
      <p>Hej Verden</p>
      <Main />
      {/* Tilføj Button-komponenten med de nødvendige props */}
      <Button
        textValue="Klik for livretter"
        classNameValue="my-button-class"
        favoriteDishes={myFavoriteDishes}
      />
      <Footer />
    </>
  );
};

export default App;
