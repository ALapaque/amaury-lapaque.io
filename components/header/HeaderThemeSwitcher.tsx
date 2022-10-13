import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useRecoilState, useRecoilValue } from 'recoil';
import DataStateInterface, { DataState, themeSelector, ThemeState } from '../../stores/data';

const HeaderThemeSwitcher = () => {
  const theme = useRecoilValue<ThemeState | undefined>(themeSelector);
  const [ data, setData ] = useRecoilState<DataStateInterface | null>(DataState);

  const _handleOnThemeSwitch = () => {
    if (!data) {
      return;
    }

    setData((state) => ({
      ...state,
      theme: state?.theme ? {
        ...state.theme,
        darkMode: !state.theme.darkMode
      } : undefined
    }));
  };

  if (!theme) {
    return <></>;
  }

  const Icon = theme.darkMode ? SunIcon : MoonIcon;

  return (
    <button
      className={ 'h-[50px] w-[50px] p-[12px]' }
      onClick={ _handleOnThemeSwitch }>
      <Icon className={ 'h-[100%] w-[100%] text-inherit transition-all ease-in-out' +
                        `${ theme.darkMode ? ' hover:text-[yellow]' : ' hover:text-white' }` } />
    </button>
  );
};

export default HeaderThemeSwitcher;

