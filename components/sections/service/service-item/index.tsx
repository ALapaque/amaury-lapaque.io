import { Service } from '../../../../typing';
import CustomSVG from '../../../CustomSVG';

type Props = {
  service: Service
}

const ServiceItem = ({ service }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-[color:var(--primary)]">{ service.name }</h3>
        <p className="mb-6 text-[color:var(--background)]">
          { service.description }

        </p>
      </div>
      <CustomSVG className="w-2/3 ml-auto -mb-32 -mr-12"
                 __html={ service.svg }
      />
    </div>
  );
};

export default ServiceItem;
