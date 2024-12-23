import MenuImage from "../assets/MenuImage.jpg";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

const MenuPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          className="h-[70vh] sm:h-[50vh]  w-full object-cover"
          src={MenuImage}
          alt="Menu Image"
        />
        <div className="absolute top-0 left-0 w-full h-[70vh] sm:h-[50vh]  bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-3xl  font-bold text-white drop-shadow-lg text-center px-4 ">
            Welcome to CoffeeHub
          </h1>
        </div>
      </div>

      {/* Menu  */}
      <div className=" md:px-16 sm:px-4 py-8 text-center flex-1">

        <Menu showAll={true} backgroundColor="bg-gray-100" /> {/* Pass showAll={true} to display all products */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MenuPage;
