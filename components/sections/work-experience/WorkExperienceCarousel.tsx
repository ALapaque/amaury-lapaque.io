import WorkExperienceCard from './work-experience-card/WorkExperienceCard';

const WorkExperienceCarousel = () => {
  return (
    <div className={ 'relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' }>
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
    </div>
  );
};

export default WorkExperienceCarousel;
