import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from "../assets/image.png";
import image2 from "../assets/image.png";

const About = () => {
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2" id="about">
      {/* Contenido de la izquierda (slider de imágenes) */}
      <div className="lg:block relative">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => 
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} style={{position: 'absolute', top: '50%', left: 60, transform: 'translateY(-50%)'}}>
                <IoIosArrowBack size={32} color="white" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) => 
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} style={{position: 'absolute', top: '50%', right: 60, transform: 'translateY(-50%)'}}>
                <IoIosArrowForward size={32} color="white" />
              </button>
            )
          }
        >
          <div>
            <img src={image1} alt="Imagen 1" />
          </div>
          <div>
            <img src={image2} alt="Imagen 2" />
          </div>
          {/* Agrega más imágenes según sea necesario */}
        </Carousel>
      </div>

      {/* Contenido de la derecha */}
      <div className="flex flex-col justify-center p-10">
        <div className="mb-2">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            Sobre mí
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-xl text-white font-light">
            Soy un estudiante de{' '}
            <span className="text-app-green">Ingeniería de Software</span> apasionado por crear soluciones innovadoras, con habilidades destacadas para trabajar en equipo y una visión actualizada en el mundo del software. Mis hobbies que más destaco son los deportes, como hacer bicicleta, patinar, entre otros deportes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

