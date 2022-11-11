import { NextPage } from 'next';
import Layout from '../../components/Layout';
import SkillSection from '../../components/sections/skills';
import { GetServerSideProps, getServerSidePropsUtils } from '../../utils/GetServerSidePropsUtils';

const Skills: NextPage<GetServerSideProps> = (props: GetServerSideProps) => {
  return (
    <Layout { ...props } pageTitle={ 'SKILLS' }>
      <SkillSection />
    </Layout>
  );
};

export const getServerSideProps: () => Promise<{ props: GetServerSideProps }> = () => getServerSidePropsUtils('skills');

export default Skills;
