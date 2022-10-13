import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import ContactTitle from './ContactTitle';

const ContactSection = () => {
  return (
    <motion.section
      id={ 'contact' }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1.5 } }
      className={ 'snap-start flex relative flex-col text-center md:text-left max-w-7xl px-10 pt-0 md:pt-10' +
                  ' place-content-center gap-y-10 mx-auto items-center' }>
      <ContactTitle />

      <ContactInformation />
      <ContactForm />
    </motion.section>
  );
};

export default ContactSection;
