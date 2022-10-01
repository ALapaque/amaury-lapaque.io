import { atom, selector } from 'recoil';
import { Experience, PageInfo, Project, Skill, Social } from '../typing';

export default interface DataStateInterface {
  pageInfo?: PageInfo,
  experiences?: Experience[],
  skills?: Skill[],
  projects?: Project[],
  socials?: Social[],
}

export const DataState = atom<DataStateInterface | null>({
  key: 'data',
  default: null
});

export const pageInfoSelector = selector({
  key: 'pageInfoSelector',
  get: ({ get }): PageInfo | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.pageInfo;
  }
});

export const experiencesSelector = selector({
  key: 'experiencesSelector',
  get: ({ get }): Experience[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.experiences;
  }
});

export const skillsSelector = selector({
  key: 'skillsSelector',
  get: ({ get }): Skill[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.skills;
  }
});

export const projectsSelector = selector({
  key: 'projectsSelector',
  get: ({ get }): Project[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.projects;
  }
});

export const socialsSelector = selector({
  key: 'socialsSelector',
  get: ({ get }): Social[] | undefined => {
    const state = get<DataStateInterface | null>(DataState);

    return state?.socials;
  }
});
