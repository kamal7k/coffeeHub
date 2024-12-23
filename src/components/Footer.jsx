import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-1 md:gap-y-8  mx-10 my-10 p-8">
        <div className="menu">
          <ul>

            <li className="mb-4">
              <a href="/" >About</a>
            </li>

            <li className="mb-4">
              <Link to={"/service-page"}>Services</Link>
            </li>
            <li className="mb-4">
              <Link to={"/training-page"}>Trainings</Link>
            </li>
            <li className="mb-4">
              <Link to={"/menu-page"}>Menu</Link>
            </li>
            <li className="mb-4">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="mb-4">
              <a href="#" >FAQs</a>
            </li>
            <li className="mb-4">
              <a href="#" >Careers</a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h1 className="text-2xl font-semibold mb-4">Contact</h1>
          <p className="mb-2">Tridevi Marg, Thamel</p>
          <p className="mb-2">Kathmandu, Nepal</p>
          <p className="mb-2"><a href="mailto:info@coffeehub.com" className="underline">info@coffeehub.com</a></p>
          <p className="mb-2">+977-[0]1-4435171</p>
        </div>
        <div className="map my-2">
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1383537583242!2d85.31499507447263!3d27.71301422524331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b2c370133%3A0x473ee6f71a52e552!2sHimalayan%20Java%20-%201%20Durbar%20Mall!5e0!3m2!1sen!2snp!4v1729862134266!5m2!1sen!2snp"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              arial-hidden="false"

            ></iframe>

          </div>
        </div>



      </div>


      {/* Bottom Section: Copyright and Social Media */}
      <div className="col-span-3 flex md:flex-col md:gap-y-4 justify-between items-center  border-t border-gray-200 mx-10 my-10 p-8">
        <p className="text-black text-xs">Copyright © 2024 CoffeeHub </p>
        <div className="flex space-x-4 text-blue-gray-500">
          <a href="#" className="hover:text-gray-800" style={{ color: '#4267B2' }}><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-800" style={{ color: 'red' }}><FaYoutube /></a>
          <a href="#" className="hover:text-gray-800" style={{ color: '#C13584' }}><FaInstagram /></a>
        </div>
        <p className="text-black text-xs">Created by kamal@team</p>
      </div>
    </>
  );
};

export default Footer;
