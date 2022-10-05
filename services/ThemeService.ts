import { groq } from 'next-sanity';
import { Theme } from '../typing';

export const getThemeQuery = (): string => {
  return (groq`*[_type == 'theme'][0]`);
};

export const fetchExperiences = async (): Promise<Theme> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchTheme`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve({} as Theme);
  }

  const data = await res.json();
  const theme: Theme = data.theme;

  return theme;
};
