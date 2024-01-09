import { NavLink } from 'react-router-dom'

export const NavLinkCustom = ({ children, to, link }) => {
  return (
    <>
      {link ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive ? 'pagination__btn page--active' : 'pagination__btn'
          }
        >
          {children}
        </NavLink>
      ) : (
        <span className='pagination__btn pagination__btn--notLink'>
          {' '}
          {children}{' '}
        </span>
      )}
    </>
  )
}
