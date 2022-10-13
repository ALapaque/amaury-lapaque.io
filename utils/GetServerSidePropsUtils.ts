import SanityService from '../services/SanityService';
import { Experience, PageInfo, Project, SanityBody, Service, Skill, Social, Theme } from '../typing';

export type GetServerSideProps = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[],
  theme: Theme,
  service: Service[],
}

export const getServerSidePropsUtils = async (): Promise<{ props: GetServerSideProps }> => {
  const sanityService: SanityService = new SanityService();
  const data: SanityBody[] = await sanityService.fetchSanityData();
  const props: GetServerSideProps = {
    experiences: (data.filter((body: SanityBody) => body._type === 'experience') as Experience[]).sort(
      (a: Experience, b: Experience) => new Date(b.dateStarted).getDate() - new Date(a.dateStarted).getDate()
    ),
    projects: (data.filter((body: SanityBody) => body._type === 'project') as Project[]).sort(
      (a: Project, b: Project) => b.order - a.order
    ),
    pageInfo: data.filter((body: SanityBody) => body._type === 'pageInfo')[0] as PageInfo,
    skills: (data.filter((body: SanityBody) => body._type === 'skill') as Skill[]).sort(
      (a: Skill, b: Skill) => a.order - b.order
    ),
    socials: data.filter((body: SanityBody) => body._type === 'social') as Social[],
    theme: data.filter((body: SanityBody) => body._type === 'theme')[0] as Theme,
    service: (data.filter((body: SanityBody) => body._type === 'service') as Service[]).sort(
      (a: Service, b: Service) => a.order - b.order
    )
  };

  return {
    props
  };
};
