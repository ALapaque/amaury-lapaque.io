import { motion } from 'framer-motion';

const AboutImg = () => (
  <motion.img
    className={'mb-2' +
               ' xl:mb-20' +
               ' flex-shrink-0' +
               ' w-40' +
               ' h-40' +
               ' rounded-full' +
               ' object-cover' +
               ' md:rounded-lg' +
               ' md:w-64' +
               ' md:h-80' +
               ' xl:w-[500px] xl:h-[50vh]'}
    initial={ {
      x: -200,
      opacity: 0,
    } }
    whileInView={ {
      x: 0,
      opacity: 1,
    } }
    transition={{
      duration: 1
    }}
    viewport={ { once: true } }
    src={'images/amaury_lapaque.jpg'}
    alt="Amaury Lapaque" />
);

export default AboutImg;
