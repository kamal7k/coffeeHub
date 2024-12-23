import About from "./About"
import Find from "./Find"
import Footer from "./Footer"
import Menu from "./Menu"
import Navbar from "./Navbar"
import Review from "./Review"
import Services from "./Services"

const FrontPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Find />
      <Menu showAll={false} backgroundColor="bg-pink-50" />
      <Review />
      <Footer />
    </>
  )
}
export default FrontPage