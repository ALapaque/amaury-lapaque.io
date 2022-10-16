import { useRecoilValue } from 'recoil';
import { serviceSelector } from '../../../stores/data';
import { Service } from '../../../typing';
import ServiceItem from './service-item';

const ServicesList = () => {
  const services = useRecoilValue(serviceSelector);

  if (!services) {
    return <></>;
  }

  return (
    <div className={ 'w-full h-full overflow-auto relative py-32 px-10 md:p-16 lg:p-32 xl:px-96' +
                     ' bg-[color:var(--background)]' +
                     ' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80 scrollbar-thin' +
                     ' scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary/60' }>
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-x-20 gap-y-32 md:w-3/4 lg:w-full lg:grid-cols-3">
          { services.map((service: Service) => (
            <ServiceItem key={ service._id }
                         service={ service } />
          )) }
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
