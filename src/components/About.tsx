import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import image1 from "../assets/image.png";
import image2 from "../assets/yo1.png";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="section grid grid-cols-1 lg:grid-cols-2" id="about">
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
            <div className='mx-28 my-28'>
              <img src={image2} alt="Imagen 2 " />
            </div>
            {/* Agrega más imágenes según sea necesario */}
          
        </Carousel>
      </div>

      {/* Contenido de la derecha */}
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


