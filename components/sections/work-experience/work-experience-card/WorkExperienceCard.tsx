import WorkExperienceDetails from './WorkExperienceDetails';
import WorkExperienceImg from './WorkExperienceImg';
import WorkExperienceSkills from './WorkExperienceSkills';
import WorkExperienceSubtitle from './WorkExperienceSubtitle';
import WorkExperienceTitle from './WorkExperienceTitle';

const WorkExperienceCard = () => {
  return (
    <article className={'snap-center' +
                        ' bg-[#292929]' +
                        ' p-10' +
                        ' flex' +
                        ' flex-col' +
                        ' rounded-lg' +
                        ' items-center' +
                        ' space-y-7' +
                        ' flex-shrink-0' +
                        ' opacity-100' +
                        ' hover:opacity-40' +
                        ' cursor-pointer' +
                        ' transition-opacity' +
                        ' duration-200' +
                        ' overflow-hidden' +
                        ' w-[500px]' +
                        ' md:w-[600px]' +
                        ' xl:w-[900px]'}>
      <WorkExperienceImg />

      <div className={'px-0 md:px-10'}>
        <WorkExperienceTitle />
        <WorkExperienceSubtitle />
        <WorkExperienceSkills />
        <WorkExperienceDetails />
      </div>
    </article>
  );
};

export default WorkExperienceCard;
