import { NextPage } from 'next';
import MultiPageLayout from '../components/layout/MultiPageLayout';
import ContactSection from '../components/sections/contact';
import useUnderMaintenance from '../hooks/useUnderMaintenance';
import { GetServerSideProps, getServerSidePropsUtils } from '../utils/GetServerSidePropsUtils';

const ContactPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  useUnderMaintenance(props.pageInfo);

  return (
    <MultiPageLayout { ...props } pageTitle={ 'CONTACT' }>
      <ContactSection />
    </MultiPageLayout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default ContactPage;
