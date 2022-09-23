import { SocialIcon, SocialIconProps } from 'react-social-icons';

const HeaderSocialIcon = ({ fgColor = 'gray', bgColor = 'transparent', ...props }: SocialIconProps) => (
  <SocialIcon
    fgColor={ fgColor }
    bgColor={ bgColor }
    { ...props } />
);

export default HeaderSocialIcon;
