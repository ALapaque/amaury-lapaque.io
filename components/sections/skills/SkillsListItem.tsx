import { motion } from 'framer-motion';

interface Props {
  direction?: 'left' | 'right';
}

const SkillsListItem = ({ direction = 'right' }: Props) => {
  return (
    <a className={ 'group relative flex' }
       href={ 'https://angular.io/' }
       target={ '_blank' }
       rel={ 'noreferrer' }>
      <img src={ 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' }
           className={ 'rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter' +
                       ' group-hover:grayscale duration-300 ease-in-out' } />

      <div className={ 'absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out' +
                       ' group-hover:bg-[#F7AB0A] w-24 h-24 xl:w-32 xl:h-32 rounded-full' }>
        <div className={ 'flex items-center justify-center h-full' }>
          <p className={ 'text-sm font-bold text-[rgb(32,32,32)] opacity-100' }>Angular</p>
        </div>
      </div>
    </a>
  );
};

export default SkillsListItem;
