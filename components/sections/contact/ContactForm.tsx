import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../stores/data';

interface ContactForm {
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
}

const ContactForm = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  if (!pageInfo) {
    return <></>;
  }

  const onSubmit = handleSubmit((data: ContactForm) => {
    window.location.href = `mailto:${ pageInfo.email }?subject=${ data.firstname } ${ data.lastname }&body=${ data.subject }`;
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

      <button className={ 'bg-[color:var(--primary)] border border-[color:var(--primary)] text-[color:var(--text)]' +
                          ' py-5 px-10 rounded-md' +
                          ' font-bold text-lg transition-all ease-in-out duration-500' +
                          ' hover:bg-transparent hover:text-primary' }
              type={ 'submit' }>
        Submit
      </button>
    </motion.form>
  );
};

export default ContactForm;
