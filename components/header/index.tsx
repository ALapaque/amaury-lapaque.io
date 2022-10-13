import { HomeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeaderContactIcon from './HeaderContactIcon';
import HeaderSocialIcons from './HeaderSocialIcons';
import HeaderThemeSwitcher from './HeaderThemeSwitcher';

const Header = () => {
  return (
    <header className={ 'sticky top-0 z-50 w-full flex' }>
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
            <button
              className={ 'h-[50px] w-[50px] p-[12px]' }>
              <Link href={ '/' }
                    shallow>
                <HomeIcon className={ 'h-[100%] w-[100%] text-[gray] transition-all ease-in-out' +
                                      ' hover:text-[color:var(--primary)]' } />
              </Link>
            </button>

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
