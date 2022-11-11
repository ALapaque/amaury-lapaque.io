import { NextPage } from 'next';
import Layout from '../../components/Layout';
import ContactSection from '../../components/sections/contact';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const ContactPage: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'CONTACT' }>
      <ContactSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = getServerSidePropsUtils;

export default ContactPage;
