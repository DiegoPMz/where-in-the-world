import './navbar.css'

import { Link } from 'react-router-dom'
import { ToggleScheme } from './toggleScheme/ToggleScheme'

export const Navbar = () => {
  return (
    <header className='header'>
      <Link
        to={'/'}
        className='header__link'
      >
        Where in the world?
      </Link>
      <ToggleScheme />
    </header>
  )
}
