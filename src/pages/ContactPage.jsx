import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import CoffeeHub from "../assets/CoffeeHub.jpg";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          className="h-[70vh] sm:h-[50vh] w-full object-cover"
          src={CoffeeHub}
          alt="CoffeeHub"
        />
        <div className="absolute top-0 left-0 w-full h-[70vh] sm:h-[50vh] bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-3xl font-bold text-white drop-shadow-lg text-center px-4">
            Fill Form To Contact
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div name="contact" className="md:px-16 sm:px-4 py-8 text-center text-gray-800">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Contact</p>
            <p className="pt-5 text-lg">Submit the form below to get in touch with us</p>
          </div>

          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/amdpqgob"
              method="POST"
              className="flex flex-col w-1/2 md:w-full space-y-2 bg-gray-500 p-3 rounded-lg "
            >
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                required
              />

              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                required
              />

              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows="6"
                className="p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 mt-6 mx-auto rounded-md hover:scale-105 transform duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;
