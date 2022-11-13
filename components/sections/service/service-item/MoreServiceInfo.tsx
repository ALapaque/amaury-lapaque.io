import { useRecoilValue } from 'recoil';
import { pageInfoSelector } from '../../../../stores/data';
import ServiceItemDescription from './ServiceItemDescription';
import ServiceItemLink from './ServiceItemLink';
import ServiceItemTitle from './ServiceItemTitle';

const MoreServiceInfo = () => {
  const pageInfo = useRecoilValue(pageInfoSelector);

  if (!pageInfo) {
    return <></>;
  }

  return (
    <div className={ 'group border-none transition  rounded-md text-[color:var(--text)] transition bg-[color:var(--primary-70)]' +
                     ' hover:z-[1] hover:shadow-2xl hover:cursor-pointer' }>
      <div className={ 'h-full flex flex-col justify-between p-8 space-y-8 border-dashed rounded-lg' +
                       ' transition duration-300' +
                       ' text-[color:var(--background)]' +
                       ' hover:cursor-pointer' +
                       ' group-hover:bg-[color:var(--background)] group-hover:text-[color:var(--primary)]' +
                       ' group-hover:border' +
                       ' group-hover:scale-90' }>
        <div className="space-y-2">
          <ServiceItemTitle>More informations</ServiceItemTitle>
          <ServiceItemDescription description={ 'You need more informations on multiple services available contact me' } />
        </div>
        <ServiceItemLink link={ `mailto:${ pageInfo.email }?subject=[MORE-INFORMATIONS]` } />
      </div>
    </div>
  );
};

export default MoreServiceInfo;
