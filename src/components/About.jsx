import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className="flex flex-row md:flex-col md:mb-12 mx-4 min-h-[600px] ">

      {/* Left Column */}
      <div className="flex flex-col p-8 items-start flex-1 mt-[80px]">
        <h1 className="text-5xl md:text-3xl font-bold my-4 text-orange-900">From Crop To Cup</h1>
        <p className="mt-3 text-gray-500 text-2xl md:text-xl">
          CoffeeHub Coffee Beans are grown locally and are roasted to perfection in the ideal Himalayan air. It is then packaged immediately and rushed off to our outlets which ensures we deliver the best coffee experience possible for all of our customers.
        </p>
        <a href="#menu"><button className="bg-orange-900 text-gray-300 text-xl md:text-lg py-3 px-7 mt-11">
          See Menu
        </button></a>
        <div className='mt-8 flex justify-between hover:cursor-pointer'>
          <FaFacebookF className='mx-2' />
          <FaYoutube className='mx-2' />
          <FaInstagram className='mx-2' />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col">
        <img
          src="https://coffeebean.com.au/cdn/shop/articles/nathan-dumlao-6VhPY27jdps-unsplash_1600x.jpg?v=1670108329"
          alt="Coffee Image"
          className="object-cover h-full"
        />
        <div className='flex justify-evenly p-6 bg-[#4D3D2E]'>
          <p className='text-white'>7 Years Experience</p>
          <p className='text-white'>25K+ Coffee Consumed</p>
          <p className='text-white'>35K+ Customers</p>
        </div>
      </div>

    </div>
  );
}

export default About;
