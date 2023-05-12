import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
export default function Layout({children}){
    const {theme} = useContext(ThemeContext)
    return(
        <div style={theme} className={`app`}>
        {children}
        </div>
    )
}