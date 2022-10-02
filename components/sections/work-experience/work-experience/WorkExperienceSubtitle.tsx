import { Experience } from '../../../../typing';

interface Props {
  experience: Experience;
}

const WorkExperienceSubtitle = ({ experience }: Props) => {
  return (
    <p className={ 'text-lg text-center md:text-left pb-2' }>{ experience.company }</p>
  );
};

export default WorkExperienceSubtitle;
