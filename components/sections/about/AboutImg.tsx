import { motion } from 'framer-motion';

const AboutImg = () => (
  <motion.img
    className={'mb-20' +
               ' md:mb-0 ' +
               ' flex-shrink-0' +
               ' w-56' +
               ' h-56' +
               ' rounded-full' +
               ' object-cover' +
               ' md:rounded-lg' +
               ' md:w-64' +
               ' md:h-96' +
               ' xl:w-[500px] xl:h-[600px]'}
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
    src={'https://scontent.fcrl2-1.fna.fbcdn.net/v/t39.30808-6/245459046_10220705226196899_3651212924131166499_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=aXXANrec5HwAX8BaZZm&_nc_ht=scontent.fcrl2-1.fna&oh=00_AT9YWztyqcxcSWB_KCrSWm-4m0RHTanpU1XHoe81139Gbg&oe=633340B7'}
    alt="Amaury Lapaque" />
);

export default AboutImg;
