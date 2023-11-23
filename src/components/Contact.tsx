import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { buttonStyle } from '../data/data';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 py-32 lg:grid-cols-2" id="contact">
      <div className="flex flex-col items-center font-rajdhani gap-3">
        {/* Sección de WhatsApp */}
        <h1 className="text-white font-bold text-7xl">{t('contact.title')}</h1>
        <div className="bg-app-second p-8 flex-col flex items-center rounded-2xl w-72">
          <FaWhatsapp
            size="3x"
            className="text-app-green"
            style={{ width: '40px', height: '40px' }}
          />
          <div className="text-white text-xl font-bold">WhatsApp</div>
          <div className="text-white font-medium ">+57 3158528714</div>
          <a
            href="https://wa.me/573158528714"  // Reemplaza esto con el enlace de tu chat de WhatsApp
            target="_blank"  // Abre el enlace en una nueva pestaña/ventana
            rel="noopener noreferrer"
            className="text-app-green text-3xl font-bold hover:underline cursor-pointer"
          >
            {t('contact.escribeme')}
          </a>        
        </div>

        {/* Sección de Correo Electrónico */}
        <div className="bg-app-second p-8 flex-col flex items-center rounded-2xl w-72">
          <HiOutlineMail
            size="3x"
            className="text-app-green"
            style={{ width: '40px', height: '40px' }}
          />
          <div className="text-white text-xl font-bold">{t('contact.email')}</div>
          <div className="text-white font-medium ">
            santiago.chamorro@outlook.com
          </div>
          <a
            href="mailto:santiago.chamorro@outlook.com"
            className="text-app-green text-3xl font-bold hover:underline cursor-pointer"
          >
            {t('contact.escribeme')}
          </a>        
        </div>
      </div>

      {/* Sección del Formulario */}
      <div className="p-6 flex flex-col justify-start items-center h-screen">
        <form
          action="https://formsubmit.co/santiago.chamorro@outlook.com"
          method="POST"
          className="flex-col flex w-90 font-rajdhani mb-6"
        >
          <div className="text-white text-7xl font-bold">{t('contact.contactMe')}</div>
          <p className="font-medium text-xl text-white mb-3">
            {t('contact.writeToMe')}
          </p>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              className="bg-app-second rounded p-2 w-full text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              className="bg-app-second rounded-lg p-2 w-full text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder={t('contact.subjectPlaceholder')}
              className="bg-app-second rounded-lg p-2 w-full text-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              className="bg-app-second rounded-lg p-2 w-full text-white"
            />
          </div>
          <button
            type="submit"
            value={t('contact.sendMessage')}
            className="font-bold"
            style={{ ...buttonStyle, width: '200px',padding: '5px 10px' }}
          >
            {t('contact.sendMessage')}
          </button>

          <input
            type="hidden"
            name="_next"
            value="https://santiago-portafolio-hazel.vercel.app/"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
