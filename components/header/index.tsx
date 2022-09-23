import { motion } from 'framer-motion';
import HeaderContactIcon from './HeaderContactIcon';
import HeaderSocialIcon from './HeaderSocialIcon';
import HeaderSocialIcons from './HeaderSocialIcons';

const Header = () => {
  return (
    <header className={ 'sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center' }>
      <motion.div
        initial={ {
          x: -500,
          opacity: 0,
          scale: 0.5
        } }
        animate={ {
          x: 0,
          opacity: 1,
          scale: 1
        } }
        transition={ {
          duration: 0.75
        } }
        className={ 'flex flex-row items-center' }>
        <HeaderSocialIcons />
      </motion.div>

      <motion.div
        initial={ {
          x: 500,
          opacity: 0,
          scale: 0.5
        } }
        animate={ {
          x: 0,
          opacity: 1,
          scale: 1
        } }
        transition={ {
          duration: 0.75
        } }
        className={ 'flex flex-row items-center cursor-pointer text-gray-300' }>
        <HeaderContactIcon />
        <p className={ 'uppercase text-sm text-gray-400 hidden md:inline-flex' }>Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
