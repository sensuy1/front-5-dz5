import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='NavBar'>
          <ul>
            <li>
                <NavLink to="form">Форма</NavLink>
            </li>
            <li>
                <NavLink to="show">Показ</NavLink>
            </li>
          </ul>
        </nav>
        
    </>
  )
}

export default NavBar