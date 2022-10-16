import { fetchExperiences } from '../services/ExperiencesService';
import { fetchPageInfo } from '../services/PageInfoService';
import { fetchProjects } from '../services/ProjectsService';
import { fetchServices } from '../services/ServicesService';
import { fetchSkills } from '../services/SkillsService';
import { fetchSocials } from '../services/SocialsService';
import { fetchTestimonials } from '../services/TestimonialsService';
import { fetchTheme } from '../services/ThemeService';
import { Experience, PageInfo, Project, Service, Skill, Social, Testimonial, Theme } from '../typing';

export type GetServerSideProps = {
  pageInfo: PageInfo,
  theme: Theme,
  experiences?: Experience[],
  skills?: Skill[],
  projects?: Project[],
  socials?: Social[],
  service?: Service[],
  testimonials?: Testimonial[]
}

export type Pages = keyof Omit<GetServerSideProps, 'theme' | 'socials'>

export const getServerSidePropsUtils = async (pageToFetch?: Pages): Promise<{ props: GetServerSideProps }> => {
  let props: GetServerSideProps = {
    theme: {} as Theme,
    pageInfo: {} as PageInfo,
    experiences: [],
    projects: [],
    service: [],
    skills: [],
    socials: [],
    testimonials: []
  };

  const [ pageInfo, theme, socials ] = await Promise.all([ fetchPageInfo(), fetchTheme(), fetchSocials() ]);

  switch (pageToFetch) {
    case 'experiences':
      const experiences: Experience[] = await fetchExperiences();

      props.experiences = experiences.sort(
        (a: Experience, b: Experience) => new Date(b.dateStarted).getDate() - new Date(a.dateStarted).getDate()
      );
      break;
    case 'projects':
      const projects: Project[] = await fetchProjects();

      props.projects = projects.sort((a: Project, b: Project) => b.order - a.order);
      break;
    case 'service':
      const services: Service[] = await fetchServices();

      props.service = services.sort((a: Service, b: Service) => a.order - b.order);
      break;
    case 'skills':
      const skills: Skill[] = await fetchSkills();

      props.skills = skills.sort((a: Skill, b: Skill) => a.order - b.order);
      break;
    case 'testimonials':
      const testimonials: Testimonial[] = await fetchTestimonials();

      props.testimonials = testimonials.sort((a: Testimonial, b: Testimonial) => a.order - b.order);
      break;
  }

  return {
    props: {
      ...props,
      theme,
      pageInfo,
      socials
    }
  };
};
