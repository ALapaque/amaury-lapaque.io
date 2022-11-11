'use client';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { themeSelector } from '../stores/data';
import CssUtils from '../utils/CssUtils';

const useTheme = () => {
  const themeState = useRecoilValue(themeSelector);

  useEffect(() => {
    if (!themeState) {
      return;
    }

    CssUtils.setDOMColor('--primary-base', themeState, themeState.darkMode ? 'darkPrimary' : 'lightPrimary');
    CssUtils.setDOMColor('--background-base', themeState, themeState.darkMode ? 'darkBackground' : 'lightBackground');
    CssUtils.setDOMColor('--text-base', themeState, themeState.darkMode ? 'darkText' : 'lightText');
  }, [ themeState, themeState?.darkMode ]);
};

export default useTheme;
