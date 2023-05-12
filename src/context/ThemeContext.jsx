/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
const ThemeContext = createContext()
function ThemeProvider ({children}) {
    const themes = {
        light: {
            background: '#fff',
            color: '#000'
        },
        dark: {
            background: '#171717',
            color: '#fff'
        }
    }
    const [theme, setTheme] = useState('dark')
    function toggleTheme () {
        setTheme(theme => theme === 'dark' ? 'light':'dark')
    }
    const value = {theme: themes[theme], toggleTheme}
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
