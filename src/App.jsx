import { ThemeProvider } from './context/ThemeContext'
import List from './components/List'
import Toggle from './components/Toggle'
import Layout from './components/Layout'
function App () {
  return (
    <>
    <ThemeProvider>
      <Layout>
      <Toggle/>
      <List/>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
