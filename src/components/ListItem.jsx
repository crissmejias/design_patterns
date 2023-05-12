import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
export default function ListItem () {
  const {theme} = useContext(ThemeContext)
    return(
        <li className={`item`} style={theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti? Sed, ipsam delectus voluptas, aliquam iusto quod accusamus a pariatur aut maiores veniam, dolorem velit. Suscipit dolore corporis maxime ab.
        </li>
    )
}
