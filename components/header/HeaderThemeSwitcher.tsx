import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import DataStateInterface, { DataState, themeSelector, ThemeState } from '../../stores/data';

const HeaderThemeSwitcher = () => {
  const theme = useRecoilValue<ThemeState | undefined>(themeSelector);
  const [ data, setData ] = useRecoilState<DataStateInterface | null>(DataState);
  const [ dark, setDark ] = useState<boolean>(true);

  const _handleOnThemeSwitch = () => {
    if (!data) {
      return;
    }

    setDark(!theme?.darkMode);
    setData((state) => ({
      ...state,
      theme: state?.theme ? {
        ...state.theme,
        darkMode: !state.theme.darkMode
      } : undefined
    }));
  };

  return (
    <div className="toggleWrapper">
      <input type="checkbox"
             checked={ dark }
             onChange={ _handleOnThemeSwitch }
             className="dn"
             id="dn" />
      <label htmlFor="dn"
             className="toggle">
        <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
};

export default HeaderThemeSwitcher;

