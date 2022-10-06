import { atom, selector } from 'recoil';
import { Experience, PageInfo, Project, Skill, Social, Theme } from '../typing';

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
}

export const DataState = atom<DataStateInterface | null>({
  key: 'data',
  default: null,
  effects: [
    ({ onSet, getPromise }) => {
      onSet(async (newCartValue) => {
        const theme: ThemeState | undefined = await getPromise(themeSelector);

      });
    }
  ]
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
