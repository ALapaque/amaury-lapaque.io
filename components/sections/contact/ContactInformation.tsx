import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const ContactInformation = () => {
  return (
    <div className={ 'space-y-10' }>
      <h4 className={ 'text-4xl font-semibold text-center' }>
        I've got just what you need.{ ' ' }
        <span className={ 'decoration-[#F7AB0A]/50 underline' }>Lets talk.</span>
      </h4>

      <div className={'space-y-10'}>
        <div className={ 'flex items-center space-x-5 justify-center' }>
          <PhoneIcon className={ 'text-[#F7AB0A] h-7 w-7 animate-pulse' } />

          <a href={ 'tel:+32476086384' }
             className={ 'text-2xl' }>
            +32 476 08 63 84
          </a>
        </div>

        <div className={ 'flex items-center space-x-5 justify-center' }>
          <MapPinIcon className={ 'text-[#F7AB0A] h-7 w-7 animate-pulse' } />

          <a href={ 'https://www.google.com/maps/dir//Rue+de+la+Croix+26,+6042+Charleroi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47c228a5bddad297:0x29a2635960ea66e?sa=X&ved=2ahUKEwj8wc_L5q36AhUB2qQKHYSPA7oQwwV6BAgOEAM' }
             target={ '_blank' }
             className={ 'text-2xl' }>
            26 rue de la croix, 6042 Lodelinsart
          </a>
        </div>

        <div className={ 'flex items-center space-x-5 justify-center' }>
          <EnvelopeIcon className={ 'text-[#F7AB0A] h-7 w-7 animate-pulse' } />

          <a href={ 'mailto:amaury.lapaque@gmail.com' }
             className={ 'text-2xl' }>
            amaury.lapaque@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactInformation;
