import { motion } from 'framer-motion';
import HeaderContactIcon from './HeaderContactIcon';
import HeaderSocialIcon from './HeaderSocialIcon';
import HeaderSocialIcons from './HeaderSocialIcons';

const Header = () => {
  return (
    <header className={ 'sticky top-0 z-50 w-full flex backdrop-blur-xl' }>
      <div className={'w-full p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center'}>
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
          className={ 'text-gray-300' }>
          <HeaderContactIcon />
        </motion.div>
      </div>
    </header>
  )
    ;
};

export default Header;
