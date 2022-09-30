import { urlFor } from '../../../sanity';
import { Skill } from '../../../typing';

interface Props {
  skill: Skill;
}

const SkillsListItem = ({ skill }: Props) => {
  return (
    <a className={ 'group relative flex' }
       href={ 'https://angular.io/' }
       target={ '_blank' }
       rel={ 'noreferrer' }>
      <img src={ urlFor(skill.image) }
           alt={ `${ skill.title }-img` }
           className={ 'object-contain w-24 h-24 xl:w-32 xl:h-32 filter' +
                       ' group-hover:grayscale duration-300 ease-in-out' } />

      <div className={ 'absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded' +
                       ' group-hover:bg-[#F7AB0A] w-24 h-24 xl:w-32 xl:h-32' }>
        <div className={ 'flex items-center justify-center h-full' }>
          <p className={ 'text-sm font-bold text-[rgb(32,32,32)] opacity-100' }>{ skill.title }</p>
        </div>
      </div>
    </a>
  );
};

export default SkillsListItem;
