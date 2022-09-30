import { useRecoilValue } from 'recoil';
import { socialsSelector } from '../../stores/data';
import { Social } from '../../typing';
import HeaderSocialIcon from './HeaderSocialIcon';

const HeaderSocialIcons = () => {
  const socials = useRecoilValue<Social[] | undefined>(socialsSelector);

  if (!socials) {
    return <></>;
  }

  return (
    <>
      { socials.map((social: Social, index: number) => (
        <HeaderSocialIcon key={ index }
                          url={ social.url } />
      )) }
    </>
  );
};

export default HeaderSocialIcons;
