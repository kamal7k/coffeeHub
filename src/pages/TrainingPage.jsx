import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Barista from "../assets/Barista.jpg"
import Barista1 from "../assets/Barista1.jpg"

const TrainingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div>
        <img
          className="h-[70vh] sm:h-[50vh]  w-full object-cover"
          src={Barista}
          alt="Barista"
        />

        <div className="absolute top-0 left-0 w-full h-[70vh] sm:h-[50vh]  bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-3xl  font-bold text-white drop-shadow-lg text-center px-4">
            Barista Training
          </h1>
        </div>
      </div>

      {/* Training Content */}
      <div className="px-16 sm:px-4 py-8 text-center bg-white flex-1">
        <h2 className="text-3xl sm:text-xl font-semibold text-gray-800 mb-6 inline border-b-4 border-gray-500">Trainings</h2>
        <p className="text-lg sm:text-sm  text-gray-700 leading-relaxed max-w-2xl mx-auto mt-6">
          Our comprehensive barista training program is designed to equip you with the essential skills and knowledge needed to excel in the coffee industry. From perfecting espresso shots to mastering latte art, our training is hands-on and tailored to all skill levels. Whether you are starting your journey as a barista or looking to refine your skills, we provide expert guidance every step of the way.
        </p>
      </div>

      <div className="flex flex-row md:flex-col md:mb-6 mx-4 min-h-[600px] bg-white">


        <div className="flex flex-col p-8 items-start text-justify flex-1 mt-[10px]">
          <h2 className="text-3xl md:text-xl font-bold my-4 text-gray-700">What We Offer:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-6">
              <strong className="text-xl md:text-lg">Hands-On Experience:</strong> <span className="text-xl md:text-sm">Learn the art of espresso extraction, milk steaming techniques, and coffee brewing methods from experienced baristas in a practical, hands-on environment.</span>
            </li>
            <li className="mb-6">
              <strong className="text-xl md:text-lg">Coffee Knowledge:</strong> <span className="text-xl md:text-sm">Gain insights into the coffee bean journey, including sourcing, roasting, and the impact of different brewing methods on flavor profiles.</span>
            </li>
            <li className="mb-6">
              <strong className="text-xl md:text-lg">Customer Service Skills:</strong><span className="text-xl md:text-sm"> Develop essential customer service skills to enhance the café experience, ensuring every cup of coffee is served with excellence.</span>
            </li>
            <li className="mb-6">
              <strong className="text-xl md:text-lg">Specialty Beverages:</strong ><span className="text-xl md:text-sm">Master the preparation of signature drinks and learn how to create unique flavor combinations that will delight our customers.</span>
            </li>
          </ul>
        </div>


        {/* Content Section */}
        <div className=" flex-1 flex flex-col p-8 mt-[10px] md:mt-1">
          {/* Image Section */}

          <img
            className="object-cover h-full"
            src="https://wholesale.methodicalcoffee.com/cdn/shop/articles/barista.jpg?v=1682443296"
            alt="Barista Woman"
          />

        </div>
      </div>

      <Footer />
    </div>
  )
}
export default TrainingPage