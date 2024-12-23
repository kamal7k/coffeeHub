import coffeeImage from '../assets/coffee.png';
import BaristaTraining from "../assets/Training.png";
import Equipment from "../assets/Equipment.png"
import Cookies from "../assets/Cookies.png"
import { Link } from 'react-router-dom';

const Services = () => {
  return (


    <div id='services' className=" flex flex-row md:flex-col md:mb-12 mr-24 ml-4 min-h-[420px] my-24">
      {/* left Column */}
      <div className="flex flex-col p-8 items-start flex-1">
        <h2 className="text-3xl md:text-2xl font-bold my-4 ">Our Services</h2>
        <p className="mt-3 text-gray-500 text-2xl md:text-xl">CoffeeHub offers its customers the best-tasting coffee beverages in the country. We have achieved this by using high-quality ingredients and strictly following preparation guidelines.</p>

        <Link to={"/contact"}><button type='button' className="bg-orange-900 text-gray-300 text-xl md:text-lg py-3 px-7 mt-11">Contact Us</button></Link>

      </div>


      <div className=" flex-1 flex-col ">

        <div className=" grid grid-cols-2 gap-4 p-4">

          <div className="flex flex-col items-center text-center">
            <img className='mt-2' src={coffeeImage} alt="" />
            <h3 className="text-lg md:text-lg font-bold my-4">Nepali Coffee Beans</h3>
            <p className=" text-gray-500 text-lg ">CoffeeHub offers its customers with locally brewed taste.</p>
          </div>

          <div className="flex flex-col text-center items-center ">
            <img className='mt-2' src={BaristaTraining} alt="" />
            <h3 className="text-lg md:text-lg font-bold my-4">Barista Training</h3>
            <p className="text-gray-500 text-lg">CoffeeHub Barista Coffee School was introduced to promote the culture of vocational training in Nepal.</p>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img className='mt-2' src={Equipment} alt="" />
            <h3 className="text-lg md:text-lg font-bold my-4">Bakery Equipments</h3>
            <p className="text-gray-500 text-lg">CoffeeHub is the sole distributor of various coffee equipment and products in Nepal.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img className='mt-2' src={Cookies} alt="" />
            <h3 className="text-lg md:text-lg font-bold my-4">Fresh Bakery Items</h3>
            <p className="text-gray-500 text-lg">We provide you a wide variety of fresh bakery items.</p>
          </div>


        </div>
      </div>

    </div>


  )
}
export default Services