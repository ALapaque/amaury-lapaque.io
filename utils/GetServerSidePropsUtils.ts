import {fetchExperiences} from '../services/ExperiencesService';
import {fetchPageInfo} from '../services/PageInfoService';
import {fetchProjects} from '../services/ProjectsService';
import {fetchServices} from '../services/ServicesService';
import {fetchSkills} from '../services/SkillsService';
import {fetchSocials} from '../services/SocialsService';
import {fetchTestimonials} from '../services/TestimonialsService';
import {fetchTheme} from '../services/ThemeService';
import {Experience, PageInfo, Project, Service, Skill, Social, Testimonial, Theme} from '../typing';

export type BaseQuery = {
	pageInfo: PageInfo,
	theme: Theme,
	socials?: Social[],
}

export type GetServerSideProps = {
	experiences?: Experience[],
	skills?: Skill[],
	projects?: Project[],
	service?: Service[],
	testimonials?: Testimonial[]
} & BaseQuery

export type Pages = keyof Omit<GetServerSideProps, 'theme' | 'socials'>

const fetchAndRemap = async <T>(pageToFetch?: Pages): Promise<T> => {
	switch (pageToFetch) {
		case 'experiences':
			const experiences: Experience[] = await fetchExperiences();

			return experiences.sort((a: Experience, b: Experience) => new Date(b.dateStarted).getDate() - new Date(a.dateStarted).getDate()) as T;
		case 'projects':
			const projects: Project[] = await fetchProjects();

			return projects
				.sort((a: Project, b: Project) => b.order - a.order)
				.reverse() as T;
		case 'service':
			const services: Service[] = await fetchServices();

			return services.sort((a: Service, b: Service) => a.order - b.order) as T;
		case 'skills':
			const skills: Skill[] = await fetchSkills();

			return skills.sort((a: Skill, b: Skill) => a.order - b.order) as T;
		case 'testimonials':
			const testimonials: Testimonial[] = await fetchTestimonials();

			return testimonials.sort((a: Testimonial, b: Testimonial) => a.order - b.order) as T;
		default:
			const [pageInfo, theme, socials] = await Promise.all([fetchPageInfo(), fetchTheme(), fetchSocials()]);

			return {
				pageInfo,
				theme,
				socials
			} as T;
	}
};

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

	const {pageInfo, theme, socials} = await fetchAndRemap<BaseQuery>();
	let page: Pages | 'all' | undefined = pageInfo.useSinglePage ? 'all' : pageToFetch;

	switch (page) {
		case 'experiences':
			props.experiences = await fetchAndRemap<Experience[]>('experiences');
			break;
		case 'projects':
			props.projects = await fetchAndRemap<Project[]>('projects');
			break;
		case 'service':
			props.service = await fetchAndRemap<Service[]>('service');
			break;
		case 'skills':
			props.skills = await fetchAndRemap<Skill[]>('skills');
			break;
		case 'testimonials':
			props.testimonials = await fetchAndRemap<Testimonial[]>('testimonials');
			break;
		case 'all':
			const [experiences, projects, service, skills, testimonials] = await Promise.all([
				fetchAndRemap<Experience[]>('experiences'),
				fetchAndRemap<Project[]>('projects'),
				fetchAndRemap<Service[]>('service'),
				fetchAndRemap<Skill[]>('skills'),
				fetchAndRemap<Testimonial[]>('testimonials')
			]);
			props.experiences = experiences;
			props.projects = projects;
			props.service = service;
			props.skills = skills;
			props.testimonials = testimonials;
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
