import { BsWordpress, BsFiletypeHtml, BsGithub,BsFillBootstrapFill } from 'react-icons/bs';
import { FaFigma, FaPhp} from 'react-icons/fa6';
import { useState } from 'react';
import { BiLogoDjango, BiLogoAngular, BiLogoPostgresql } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';


type ProjectName = "redinfoco" | "academix" | "KeySafe"; // Define los nombres de los proyectos


const Projects = () => {

  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<ProjectName | null>(null);

  const handleMouseEnter = (projectName: ProjectName) => {
    setHoveredProject(projectName);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleCardClick = (projectName: ProjectName) => {
    // Puedes redirigir a diferentes enlaces según el proyecto
    switch (projectName) {
      case "redinfoco":
        window.open("https://redinfoco.com", "_blank");
        break;
      case "academix":
        window.open("https://gitlab.com/Saidres/notas-ucc", "_blank");
        break;
      case "KeySafe":
        window.open("https://KeySafe.com", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="py-20">
      <div className="flex flex-col justify-center items-center" id='work'>
        <div className="mb-2">
          <h1 className="text-7xl font-bold font-rajdhani text-white">
            {t('projects.title')}
          </h1>
        </div>
      </div>
      <div className='flex flex-col justify-normal px-4 sm:px-40 '>
        <div
          onClick={() => handleCardClick("redinfoco")}
          className={`bg-app-second h-auto sm:h-60 px-2 m-2 sm:m-5 grid grid-cols-1 sm:grid-cols-2 rounded-2xl transition-transform transform ${
            hoveredProject === "redinfoco" ? "scale-110" : "scale-100"
          }`}
          onMouseEnter={() => handleMouseEnter("redinfoco")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-20 py-10 font-rajdhani text-white">
            <h2 className="font-bold text-5xl mb-4">RED INFOCO</h2>
            <p className="font-medium mb-6 text-xl">{t('projects.redinfocoDescription')}</p>
            <div className="flex">
              <i className="fas fa-icono1">
                <BsWordpress style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono2 ml-5 ">
                <FaFigma style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono3 ml-5">
                <BsFiletypeHtml style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
            </div>
          </div>
          <div className="flex flex-col items-end py-9 px-20">
            <img src="src/assets/computador.png" alt="Computadora" />
          </div>
        </div>

        <div
          onClick={() => handleCardClick("academix")}
          className={`bg-app-second h-auto sm:h-60 px-2 m-2 sm:m-5 grid grid-cols-1 sm:grid-cols-2 rounded-2xl transition-transform transform ${
            hoveredProject === "academix" ? "scale-110" : "scale-100"
          }`}
          onMouseEnter={() => handleMouseEnter("academix")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-20 py-10 font-rajdhani text-white">
            <h2 className="font-bold text-5xl mb-4">ACADEMIX</h2>
            <p className="font-medium mb-6 text-xl">{t('projects.academixDescription')}</p>
            <div className="flex">
              <i className="fas fa-icono1">
                <FaPhp style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono2 ml-5 ">
                <BsFillBootstrapFill style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono3 ml-5">
                <BsGithub style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
            </div>
          </div>
          <div className="flex flex-col items-end py-9 px-20">
            <img src="src/assets/computadora.png" alt="Computadora" />
          </div>
        </div>

        <div
          onClick={() => handleCardClick("KeySafe")}
          className={`bg-app-second h-auto sm:h-60 px-2 m-2 sm:m-5 grid grid-cols-1 sm:grid-cols-2 rounded-2xl transition-transform transform ${
            hoveredProject === "KeySafe" ? "scale-110" : "scale-100"
          }`}
          onMouseEnter={() => handleMouseEnter("KeySafe")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-20 py-10 font-rajdhani text-white">
            <h2 className="font-bold text-5xl mb-4">KeySafe</h2>
            <p className="font-medium mb-6 text-xl">{t('projects.keySafeDescription')}</p>
            <div className="flex">
              <i className="fas fa-icono1">
                <BiLogoDjango style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono2 ml-5 ">
                <BiLogoAngular style={{ width: '30px', height: '30px', color:"#CBFF4D" }} />
              </i>
              <i className="fas fa-icono3 ml-5">
                <BiLogoPostgresql style={{ width: '30px', height: '30px', color:"#CBFF4D"   }} />
              </i>
            </div>
          </div>
          <div className="flex flex-col items-end py-9 px-20">
            <img src="src/assets/computador-3.png" alt="Computadora" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
