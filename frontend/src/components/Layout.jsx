import FooterPage from "../pages/FooterPage"
import Navbar from "./Navbar"




const Layout = ({children}) => {
  return (
    <div>

<Navbar />
      <main>{children}</main> 
<FooterPage />



    </div>
  )
}

export default Layout;