import { useRecoilValue } from 'recoil';
import { experiencesSelector } from '../../../stores/data';
import { Experience } from '../../../typing';
import Carousel from '../../carousel';
import WorkExperience from './work-experience';

const WorkExperiences = () => {
  const experiences = useRecoilValue(experiencesSelector);

  if (!experiences) {
    return <></>;
  }

  return (
    <Carousel subElementId={ 'experience-item' }>
      { experiences.map((experience: Experience, index: number) => (
        <WorkExperience
          key={ index }
          id={ `experience-item-${ index }` }
          experience={ experience }
        />
      )) }
    </Carousel>
  );
};

export default WorkExperiences;
