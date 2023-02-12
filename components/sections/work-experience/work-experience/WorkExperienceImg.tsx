import { motion } from 'framer-motion';
import { urlFor } from '../../../../sanity';
import { Experience } from '../../../../typing';

interface Props {
  experience: Experience;
}

const WorkExperienceImg = ({ experience }: Props) => {
  return (
    <motion.img
      initial={ {
        y: -300,
        opacity: 0
      } }
      animate={ {
        y: 0,
        opacity: 1
      } }
      transition={ { duration: 1 } }
      src={ urlFor(experience.companyImage) }
      alt={ 'img' }
      className={ 'max-w-[20vh] max-h-[10vh]' } />
  )
}

export default WorkExperienceImg
