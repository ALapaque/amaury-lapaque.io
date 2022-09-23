import WorkExperienceCard from './work-experience-card/WorkExperienceCard';

const WorkExperienceCarousel = () => {
  return (
    <div className={'w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'}>
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
      <WorkExperienceCard />
    </div>
  );
};

export default WorkExperienceCarousel;
