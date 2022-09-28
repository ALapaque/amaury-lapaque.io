import { motion } from 'framer-motion';

const WorkExperienceImg = () => {
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
      viewport={ { once: true } }
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
      alt={ 'img' }
      className={ 'max-w-[20vh] max-h-[10vh]' } />
  )
}

export default WorkExperienceImg
