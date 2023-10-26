import image from "../assets/image.png";
import { FaGithub } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa6';
import image2 from "../assets/image2.png";
import { useState } from 'react';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(image);
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2" id="home">
      {/* Contenido de la izquierda */}
      <div className="flex flex-col justify-center p-9 ml-60">
        <div className="mb-2">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            ¡HOLA!<br />
            SOY<br />
            <span className="text-app-green">SANTIAGO</span>  
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-xl text-white font-light">Desarrollador frontend y backend</p>
        </div>
        <div className="">
          <button className="text-app-green py-2 m-6 ml-0">
            <FaGithub style={{ width: '30px', height: '30px' }} />
          </button>
          <button className="text-app-green py-2 m-6">
            <BsLinkedin style={{ width: '30px', height: '30px' }} />
          </button>
          <button className="text-app-green py-2 m-6">
            <FaFilePdf style={{ width: '30px', height: '30px' }} />
          </button>
        </div>
      </div>

      {/* Contenido de la derecha (imagen) */}
      <div className="hidden lg:block">
      <img src={currentImage} alt="Imagen" className="w-full h-auto" 
        onMouseEnter={() => setCurrentImage(image2)}
        onMouseLeave={() => setCurrentImage(image)}
      />
      </div>
    </div>
  );
};

export default Banner;



