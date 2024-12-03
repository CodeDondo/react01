import { NavBarStyled } from './NavBar.styled'

export const NavBar = () => {
  return (
    <NavBarStyled>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </NavBarStyled>
  )
}