import { useEffect } from 'react';
import { Theme } from '../typing';

const useTheme = (theme: Theme) => {
  useEffect(() => {
    document.documentElement
            .style
            .setProperty(
              '--primary-base',
              `${ theme.primary.rgb.r }, ${ theme.primary.rgb.g }, ${ theme.primary.rgb.b }`
            );
  }, [ theme ]);
};

export default useTheme;
