import { motion } from 'framer-motion';

const HeroBackgroundAnimation = () => {
  return (
    <motion.div
      initial={ {
        opacity: 0
      } }
      animate={ {
        opacity: [ 0.1, 0.2, 0.4, 0.8, 0.1, 1.0 ],
        borderRadius: [ '20%', '20%', '50%', '80%', '20%' ]
      } }
      transition={ {
        duration: 2.5,
        delay: 0.75
      } }
      className={ 'relative flex justify-center items-center' }>
      <div className={ 'absolute border border-[#666666] rounded-full h-[200px] w-[200px] mt-96 animate-ping' } />
      <div className={ 'absolute border border-[#666666] rounded-full h-[300px] w-[300px] mt-96 animate-ping' } />
      <div className={ 'absolute border border-[#666666] rounded-full h-[500px] w-[500px] mt-96 animate-ping' } />
      <div className={ 'absolute rounded-full border border-[color:var(--primary)] h-[650px] w-[650px] mt-96' +
                       ' opacity-20 animate-pulse' } />
      <div className={ 'absolute border border-primary rounded-full h-[800px] w-[800px] mt-96 animate-ping' } />
    </motion.div>
  );
};

export default HeroBackgroundAnimation;
