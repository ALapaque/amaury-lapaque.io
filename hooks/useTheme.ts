import { useEffect } from 'react';
import { SanityColor, Theme } from '../typing';

const useTheme = (theme: Theme) => {
  console.log('theme :: ', theme);

  const setDOMColor = (cssVariable: string, themeKey: keyof Theme) => {
    const color: SanityColor = theme[themeKey] as SanityColor;

    document.documentElement.style.setProperty(cssVariable, `${ color.rgb.r }, ${ color.rgb.g }, ${ color.rgb.b }`);
  };

  useEffect(() => {
    setDOMColor('--primary-base', 'primary');
    setDOMColor('--background-base', 'background');
    setDOMColor('--text-base', 'text');
  }, [ theme ]);
};

export default useTheme;
