import { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import ServiceSection from '../components/sections/service';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const Services: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'SERVICES' }>
      <ServiceSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('service');

export default Services;
