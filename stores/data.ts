import { atom, selector } from 'recoil';
import { Experience, PageInfo, Project, Service, Skill, Social, Testimonial, Theme } from '../typing';

export interface ThemeState extends Theme {
  mode?: 'light' | 'dark';
}

export default interface DataStateInterface {
  pageInfo?: PageInfo,
  experiences?: Experience[],
  skills?: Skill[],
  projects?: Project[],
  socials?: Social[],
  theme?: ThemeState,
  service?: Service[],
  testimonials?: Testimonial[],
}

export const DataState = atom<DataStateInterface | null>({
  key: 'data',
  default: null
});

export const pageInfoSelector = selector({
  key: 'PageInfoSelector',
  get: ({ get }): PageInfo | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.pageInfo;
  }
});

export const experiencesSelector = selector({
  key: 'ExperiencesSelector',
  get: ({ get }): Experience[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.experiences;
  }
});

export const skillsSelector = selector({
  key: 'SkillsSelector',
  get: ({ get }): Skill[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.skills;
  }
});

export const projectsSelector = selector({
  key: 'ProjectsSelector',
  get: ({ get }): Project[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.projects;
  }
});

export const socialsSelector = selector({
  key: 'SocialsSelector',
  get: ({ get }): Social[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.socials;
  }
});

export const themeSelector = selector({
  key: 'ThemeSelector',
  get: ({ get }): Theme | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.theme;
  }
});

export const serviceSelector = selector({
  key: 'ServiceSelector',
  get: ({ get }): Service[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.service;
  }
});

export const testimonialsSelector = selector({
  key: 'ServiceSelector',
  get: ({ get }): Testimonial[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.testimonials;
  }
});
