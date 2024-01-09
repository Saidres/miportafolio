import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from "../assets/yo1.png";
import image3 from "../assets/yo3.jpg";
import image4 from "../assets/yo4.jpg";

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2 " id="about">
      {/* Contenido de la izquierda (slider de imágenes) */}
      <div className="lg:block relative">
      <div className="mb-2 text-center lg:hidden">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            {t('about.title')}
          </h1>
        </div>
        <Carousel 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          showThumbs={false}

          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 50, // Ajusta la posición del botón de retroceso según sea necesario
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                }}
              >
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
            <div className='mx-28 my-28'>
              <img className='rounded-lg' src={image1} alt="Imagen 1 " />
            </div>
            <div className='mx-28 my-28'>
              <img className='rounded-lg' src={image3} alt="Imagen 3 " />
            </div>
            <div className='mx-28 my-28'>
              <img className='rounded-lg' src={image4} alt="Imagen 4 " />
            </div>

          
        </Carousel>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start p-10">
        <div className="mb-2 text-center lg:text-left hidden lg:block">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            {t('about.title')}
          </h1>
        </div>
        <div className="mb-4 text-center lg:text-left">
          <p className="text-2xl text-white font-light">
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


