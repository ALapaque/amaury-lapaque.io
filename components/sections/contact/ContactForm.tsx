import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Contact from './index';

interface ContactForm {
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
}

const ContactForm = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = handleSubmit((data: ContactForm) => {
    window.location.href = `mailto:amaury.lapaque@gmail.com?subject=${ data.firstname } ${ data.lastname }&body=${ data.subject }`;
  });

  return (
    <motion.form
      onSubmit={ onSubmit }
      initial={ { opacity: 0 } }
      whileInView={ { opacity: 1 } }
      transition={ { duration: 1 } }
      viewport={ { once: true } }
      className={ 'flex flex-col space-y-2 w-fit mx-auto' }>
      <div className={ 'flex space-x-2' }>
        <input
          placeholder={ 'Firstname' }
          className={ 'form-field' }
          type={ 'text' }
          { ...register('firstname', { required: true }) } />
        <input
          placeholder={ 'Lastname' }
          className={ 'form-field' }
          type={ 'text' }
          { ...register('lastname', { required: true }) } />
      </div>

      <input placeholder={ 'Email' }
             className={ 'form-field' }
             type={ 'email' }
             { ...register('email', { required: true }) } />

      <textarea placeholder={ 'Subject' }
                className={ 'form-field' }
                cols={ 30 }
                rows={ 5 }
                { ...register('subject', { required: true }) } />

      <button className={ 'bg-[#F7AB0A] border border-[#F7AB0A] py-5 px-10 rounded-md text-[#2e2e2e]' +
                          ' font-bold text-lg hover:bg-transparent hover:text-[#F7AB0A] transition-all ease-in-out' +
                          ' duration-500' }>
        Submit
      </button>
    </motion.form>
  );
};

export default ContactForm;
