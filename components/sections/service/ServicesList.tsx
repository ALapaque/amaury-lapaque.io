import { useRecoilValue } from 'recoil';
import { serviceSelector } from '../../../stores/data';
import { Service } from '../../../typing';
import ServiceItem from './service-item';
import MoreServiceInfo from './service-item/MoreServiceInfo';

const ServicesList = () => {
  const services = useRecoilValue(serviceSelector);

  if (!services) {
    return <></>;
  }

  return (
    <div className={ 'h-full px-10 py-10 md:px-40' }>
      <div className={ 'py-16 border-radius-full grid gap-2 md:gap-6 divide-x divide-y rounded-xl overflow-hidden' +
                       ' sm:grid-cols-2' +
                       ' lg:divide-y-0' +
                       ' lg:grid-cols-3 xl:grid-cols-4' }>
        { services.map((service: Service) => (
          <ServiceItem key={ service._id }
                       service={ service } />
        )) }

        <MoreServiceInfo />
      </div>
    </div>
  );
};

export default ServicesList;
