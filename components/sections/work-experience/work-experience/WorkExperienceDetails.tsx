import { Experience } from '../../../../typing';

interface Props {
  experience: Experience;
}

const WorkExperienceDetails = ({ experience }: Props) => {
  return (
    <>
      <p className={ 'uppercase py-5 text-[color:var(--text)]' }>
        <>{ experience.dateStarted } → { experience.dateEnded ?? 'NOW' }</>
      </p>

      <ul className={ 'list-disc space-y-1 ml-5 text-lg text-[color:var(--text)]' }>
        { experience.points.map((point: string, index: number) => (
          <li key={ index }>{ point }</li>
        )) }
      </ul>
    </>
  );
};

export default WorkExperienceDetails;
