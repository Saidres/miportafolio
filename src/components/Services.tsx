import { FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaDatabase, FaPhp, FaLaravel } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoJava, BiLogoAngular, BiLogoBootstrap, BiLogoTypescript} from 'react-icons/bi';
import './services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center p-10" id='services'>
        <div className="py-10">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            {t('services.title')}
          </h1>
        </div>

        {/* Sección de Iconos en Dos Filas */}
        <div className="flex flex-wrap justify-center animate-scroll items-center">
          <FaJs className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaPython className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <BiLogoJava className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaHtml5 className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaCss3 className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaPhp className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaJs className="text-app-green icon-margin text-9xl lg:text-12xl" />
        
        </div>

        <div className="flex flex-wrap justify-center animate-scroll">
          <FaReact className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <BiLogoAngular className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <BiLogoBootstrap className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <BiLogoTailwindCss className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaDatabase className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <FaLaravel className="text-app-green icon-margin text-9xl lg:text-12xl" />
          <BiLogoTypescript className="text-app-green icon-margin text-9xl lg:text-12xl" />
        </div>
      </div>
    </div>
  );
};

export default Services;
