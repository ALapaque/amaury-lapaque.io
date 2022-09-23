import { motion } from 'framer-motion';

const WorkExperienceImg = () => {
  return (
    <motion.img
      initial={ {
        y: -100,
        opacity: 0
      } }
      whileInView={ {
        y: 0,
        opacity: 1
      } }
      transition={ { duration: 1.2 } }
      viewport={ { once: true } }
      className={ 'w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' }
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
      alt="Amazon" />
  )
}

export default WorkExperienceImg
