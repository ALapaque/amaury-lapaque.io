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
      className={ 'pt-20 flex flex-col gap-10 text-center items-center' }>

      <ContactTitle />

      <ContactInformation />
      <ContactForm />
    </motion.section>
  );
};

export default ContactSection;
