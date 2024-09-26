
import { Outlet } from 'react-router-dom'
import { Navbar , Footer, ScrollToTopButton} from './components'

function Layout() {
  return (
    <>
     <Navbar/>
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
    
    </>
  )
}

export default Layout