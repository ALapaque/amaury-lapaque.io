import { Experience } from '../../../../typing';

interface Props {
  experience: Experience;
}

const WorkExperienceTitle = ({ experience }: Props) => {
  return (
    <h4 className={ 'text-4xl font-semibold text-center text-[color:var(--text)]' }>{ experience.jobTitle }</h4>
  );
};

export default WorkExperienceTitle;
