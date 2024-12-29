import React from "react";
import Carousel from "../components/Carousel";
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import image1 from '../assets/images/Coffee 1.jpg'
import image2 from '../assets/images/Coffee 2.webp'
import image3 from '../assets/images/Coffee 3.jpg'
import image4 from '../assets/images/Coffee 3.webp'
import image5 from '../assets/images/Coffee 4.jpg'
import image6 from '../assets/images/Coffee 4.webp'
import image7 from '../assets/images/Coffee 5.webp'
import image8 from '../assets/images/Coffee 6.webp'
import image9 from '../assets/images/Coffee 7.webp'
import image10 from '../assets/images/Coffee 8.webp'
import image11 from '../assets/images/Coffee.jpg'
import image12 from '../assets/images/Coffee.png'
import image13 from '../assets/images/Coffee.webp'


function LandingPage() {
  return (
    <div className="text-center mt-10">
      <Banner />
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image1} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image2} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image3} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image4} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image5} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image6} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image7} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image8} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image9} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image10} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image11} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image12} alt="" />
        </div>       
        <div className="bg-blue-200 p-4 rounded h-[200px]">
          <img className="bg-cover bg-center w-full h-full object-cover hover:scale-105 duration-150" src={image13} alt="" />
        </div>       
      </div>
 
    </div>
  );
}

export default LandingPage;
