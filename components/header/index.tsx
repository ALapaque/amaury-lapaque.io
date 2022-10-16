import { motion } from 'framer-motion';
import HeaderContactIcon from './HeaderContactIcon';
import HeaderHomeIcon from './HeaderHomeIcon';
import HeaderSocialIcons from './HeaderSocialIcons';
import HeaderThemeSwitcher from './HeaderThemeSwitcher';

const Header = () => {
  return (
    <header className={ 'sticky top-0 z-50 w-full flex backdrop-blur-lg' }>
      <div className={ 'max-h-[75px] w-full p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center' }>
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
          <>
            <HeaderHomeIcon />

            <HeaderSocialIcons />
          </>
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
          className={ 'flex flex-row items-center text-[gray]' }>
          <HeaderContactIcon />

          <HeaderThemeSwitcher />
        </motion.div>
      </div>
    </header>
  )
    ;
};

export default Header;
