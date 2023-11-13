import { FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaDatabase, FaPhp, FaLaravel } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJava, BiLogoAngular, BiLogoBootstrap, BiLogoTypescript} from 'react-icons/bi';
import './Services.css';

const Services = () => {
  const iconSize = { fontSize: '13em', color: '#CBFF4D'};

  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center p-10" id='services'>
        <div className="py-10">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            Habilidades
          </h1>
        </div>

        {/* Sección de Iconos en Dos Filas */}
        <div className="flex flex-wrap justify-center animate-scroll items-center">
          <FaJs style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaPython style={{ ...iconSize, }} className="text-white icon-margin" />
          <BiLogoJava style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaHtml5 style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaCss3 style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaPhp style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaJs style={{ ...iconSize, }} className="text-white icon-margin" />
        
        </div>

        <div className="flex flex-wrap justify-center animate-scroll">
          <FaReact style={{ ...iconSize, }} className="text-white icon-margin" />
          <BiLogoAngular style={{ ...iconSize, }} className="text-white icon-margin" />
          <BiLogoBootstrap style={{ ...iconSize, }} className="text-white icon-margin" />
          <BiLogoTailwindCss style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaDatabase style={{ ...iconSize, }} className="text-white icon-margin" />
          <FaLaravel style={{ ...iconSize, }} className="text-white icon-margin" />
          <BiLogoTypescript style={{ ...iconSize, }} className="text-white icon-margin" />
        </div>
      </div>
    </div>
  );
};

export default Services;

