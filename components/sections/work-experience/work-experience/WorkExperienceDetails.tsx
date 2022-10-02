import { Experience } from '../../../../typing';

interface Props {
  experience: Experience;
}

const WorkExperienceDetails = ({ experience }: Props) => {
  return (
    <>
      <p className={ 'uppercase py-5 text-gray-300' }>
        <>{ experience.dateStarted } → { experience.dateEnded }</>
      </p>

      <ul className={ 'list-disc space-y-4 ml-5 text-lg' }>
        { experience.points.map((point: string, index: number) => (
          <li key={ index }>{ point }</li>
        )) }
      </ul>
    </>
  );
};

export default WorkExperienceDetails;
