import { Classic } from '@theme-toggles/react'
import '@theme-toggles/react/css/Classic.css'
import { useEffect, useState } from 'react'
import './toggleScheme.css'

export const ToggleScheme = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme(false)
    }
  }, [])

  return (
    <div
      onClick={() => toggleTheme({ setTheme, theme })}
      className='container-toggle'
    >
      <Classic toggled={theme} />
      <span className='toggle__name'>{theme ? 'Dark Mode' : 'Ligth Mode'}</span>
    </div>
  )
}

const toggleTheme = ({ setTheme, theme }) => {
  setTheme(!theme)
  const bodyElement = document.body

  const classOfThemes = {
    dark: 'body--dark',
    ligth: 'body--light',
  }
  const { dark, ligth } = classOfThemes

  const changeTheme = {
    true: () => {
      if (bodyElement.id === dark) {
        bodyElement.setAttribute('id', ligth)
      } else {
        bodyElement.setAttribute('id', ligth)
      }
    },

    false: () => {
      if (bodyElement.id === ligth) {
        bodyElement.setAttribute('id', dark)
      } else {
        bodyElement.setAttribute('id', dark)
      }
    },
  }

  const themeSelected = changeTheme[theme]

  themeSelected()
}
