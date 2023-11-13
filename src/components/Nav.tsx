import { useState } from 'react';
import { BiSolidHand} from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { FaBriefcase, FaIdCard} from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };


  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1
          rounded-full max-w-[460px] mx-auto px-10 flex justify-between text-2x1 
          text-white/50'>
          <Link 
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[90px] h-[90px] flex items-center justify-center ${activeIcon === 'home' ? 'text-app-green' : ''}`}
            onClick={() => handleIconClick('home')}
          >
            <AiFillHome size={30}/>
          </Link>
          <Link 
            to='about'
            activeClass='active'
            smooth={true}
            spy={true} 
            className={`cursor-pointer w-[90px] h-[90px] flex items-center justify-center ${activeIcon === 'about' ? 'text-app-green' : ''}`}
            onClick={() => handleIconClick('about')}
          >
            <BsFillPersonFill size={30} />
          </Link>
          <Link 
            to='services'
            activeClass='active'
            smooth={true}
            spy={true} 
            className={`cursor-pointer w-[90px] h-[90px] flex items-center justify-center ${activeIcon === 'services' ? 'text-app-green' : ''}`}
            onClick={() => handleIconClick('services')}
          >
            <BiSolidHand size={30}/>
          </Link>
          <Link 
            to='work'
            activeClass='active'
            smooth={true}
            spy={true} 
            className={`cursor-pointer w-[90px] h-[90px] flex items-center justify-center ${activeIcon === 'work' ? 'text-app-green' : ''}`}
            onClick={() => handleIconClick('work')}
          >
            <FaBriefcase size={30}/>
          </Link>
          <Link 
            to='contact'
            activeClass='active'
            spy={true}
            smooth={true}
            className={`cursor-pointer w-[90px] h-[90px] flex items-center justify-center ${activeIcon === 'contact' ? 'text-app-green' : ''}`}
            onClick={() => handleIconClick('contact')}
          >
            <FaIdCard size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;



