import CoffeeBeans from "../assets/CoffeeBeans.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          className="h-[70vh] sm:h-[50vh]  w-full object-cover"
          src={CoffeeBeans}
          alt="Coffee Beans"
        />
        <div className="absolute top-0 left-0 w-full h-[70vh] sm:h-[50vh]  bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-3xl  font-bold text-white drop-shadow-lg text-center px-4 ">
            Welcome to CoffeeHub
          </h1>
        </div>
      </div>

      {/* Services Content */}
      <div className=" md:px-16 sm:px-4 py-8 text-center bg-white flex-1">
        <h2 className="text-3xl sm:text-xl font-semibold text-gray-800 mb-6 inline border-b-4 border-gray-500">Our Services</h2>
        <p className="text-lg sm:text-sm  text-gray-700 leading-relaxed max-w-2xl mx-auto mt-6">
          At CoffeeHub, we're passionate about providing you with the ultimate coffee experience. From expertly brewed espresso and handcrafted lattes to a variety of specialty teas, our menu offers something for everyone. We source high-quality beans from sustainable farms to bring you rich, flavorful coffee in every cup. Enjoy a cozy ambiance, free Wi-Fi, and a perfect spot to work or relax. Whether you're here for a quick coffee, a delicious pastry, or a meeting space, CoffeeHub has it all. We also provide catering services for events, delivering fresh coffee and snacks directly to you.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;
