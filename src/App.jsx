import './App.scss';
import { Header } from './Components/Header/Header.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { Main } from './Components/Main.jsx';
import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Button } from './Components/Button/Button.jsx';
import { ButtonComponent } from './Components/Button/ButtonComponent.jsx';

const App = () => {
  // Definer dine livretter
  const myFavoriteDishes = ["Pizza", "Sushi", "Pasta", "Burger", "Tacos"];

  // Alert-funktioner til de tre knapper
  const alertSmall = () => alert("Du klikkede på den lille knap!");
  const alertMedium = () => alert("Du klikkede på den mellemstore knap!");
  const alertLarge = () => alert("Du klikkede på den store knap!");

  return (
    <>
      <Header />
      <NavBar />
      <p>Hej Verden</p>
      <Main />
      {/* Eksisterende Button-komponent */}
      <Button
        textValue="Klik for livretter"
        classNameValue="my-button-class"
        favoriteDishes={myFavoriteDishes}
      />
      {/* Nye dynamic buttons */}
      <div style={{ marginTop: "20px" }}>
        <ButtonComponent 
          action={alertSmall} 
          size="small" 
          theme="light" 
          text="Lille Knap" 
        />
        <ButtonComponent 
          action={alertMedium} 
          size="medium" 
          theme="dark" 
          text="Mellem Knap" 
        />
        <ButtonComponent 
          action={alertLarge} 
          size="large" 
          theme="light" 
          text="Stor Knap" 
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
