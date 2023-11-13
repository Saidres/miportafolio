import image from "../assets/image.png";
import { FaGithub } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa6';
import image2 from "../assets/image2.png";
import { useState } from 'react';
import { buttonStyle } from "../data/data";
import cvPdf from "../assets/cv.pdf";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(image);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const openGitHub = () => {
    window.open('https://github.com/Saidres', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/santiago-andres-chamorro-pineda-634a42251/', '_blank');
  };

  const downloadCV = () => {
    window.open(cvPdf, '_blank');
  };

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
          <p className="text-2xl text-white font-light">Soy un estudiante de ingeniería de Software <br />apasionado en programar, mi enfoque se centra en el FrontEnd </p>
        </div>
        <div className="flex items-center">
          <div className="relative group">
            <button
              className="text-app-green py-2 m-6 transition duration-300 transform hover:scale-110"
              onClick={openGitHub}
              onMouseEnter={() => setHoveredIcon("GitHub")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaGithub style={{ width: '30px', height: '30px' }} />
            </button>
            {hoveredIcon === "GitHub" && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-md" style={buttonStyle}>GitHub</span>
            )}
          </div>
          <div className="relative group">
            <button
              className="text-app-green py-2 m-6 transition duration-300 transform hover:scale-110"
              onClick={openLinkedIn}
              onMouseEnter={() => setHoveredIcon("LinkedIn")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <BsLinkedin style={{ width: '30px', height: '30px' }} />
            </button>
            {hoveredIcon === "LinkedIn" && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-md" style={buttonStyle}>LinkedIn</span>
            )}
          </div>
          <div className="relative group">
            <button
              className="text-app-green py-2 m-6 transition duration-300 transform hover:scale-110"
              onClick={downloadCV}
              onMouseEnter={() => setHoveredIcon("PDF")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaFilePdf style={{ width: '30px', height: '30px' }} />
            </button>
            {hoveredIcon === "PDF" && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 rounded-md" style={buttonStyle}>CV</span>
            )}
          </div>
        </div>
      </div>

      {/* Contenido de la derecha (imagen) */}
      <div className="hidden lg:block">
        <img
          src={currentImage}
          alt="Imagen"
          className="w-full h-auto"
          onMouseEnter={() => setCurrentImage(image2)}
          onMouseLeave={() => setCurrentImage(image)}
        />
      </div>
    </div>
  );
};

export default Banner;
