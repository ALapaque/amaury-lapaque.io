import { useRecoilValue } from 'recoil';
import { experiencesSelector } from '../../../stores/data';
import { Experience } from '../../../typing';
import WorkExperienceCard from './work-experience-card/WorkExperienceCard';

const WorkExperienceCarousel = () => {
  const experiences = useRecoilValue(experiencesSelector);

  if (!experiences) {
    return <></>;
  }

  return (
    <div className={ 'relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-[#F7AB0A]/60 ' }>
      { experiences.map((experience: Experience, index: number) => (
        <WorkExperienceCard
          key={ index }
          experience={ experience }
        />
      )) }
    </div>
  );
};

export default WorkExperienceCarousel;
