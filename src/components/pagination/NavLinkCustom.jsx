import { NavLink } from 'react-router-dom'

export const NavLinkCustom = ({ children, to }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? 'pagination__btn page--active' : 'pagination__btn'
        }
      >
        {children}
      </NavLink>
    </>
  )
}
