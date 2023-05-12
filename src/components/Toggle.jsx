import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
export default function Toggle () {
  const { toggleTheme } = useContext(ThemeContext)
  return (
        <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round" />
      </label>
  )
}
