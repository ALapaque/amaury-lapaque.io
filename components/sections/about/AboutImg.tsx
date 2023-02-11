import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { urlFor } from '../../../sanity';
import { pageInfoSelector } from '../../../stores/data';

const AboutImg = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <motion.img
      className={ 'mb-2' +
                  ' xl:mb-20' +
                  ' flex-shrink-0' +
                  ' w-40' +
                  ' h-40' +
                  ' rounded-full' +
                  ' object-cover' +
                  ' md:rounded-lg' +
                  ' md:w-64' +
                  ' md:h-80' +
                  ' xl:w-[500px] xl:h-[50vh]' }
      initial={ {
        x: -200,
        opacity: 0
      } }

      whileInView={ {
        x: 0,
        opacity: 1
      } }
      transition={ {
        duration: 1
      } }
      viewport={ { once: true } }
      src={ urlFor(pageInfo.profilePic) }
      alt="Amaury Lapaque" />
  );
};

export default AboutImg;
