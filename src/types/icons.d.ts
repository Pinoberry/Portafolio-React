import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

declare module 'react-icons' {
  interface IconProps extends IconBaseProps {
    size?: string | number;
  }
}

declare module 'react-icons/fa' {
  export const FaGithub: IconType;
  export const FaExternalLinkAlt: IconType;
}

declare module 'react-icons/hi' {
  export const HiMenu: IconType;
}

declare module 'react-icons/ri' {
  export const RiMailLine: IconType;
  export const RiMapPinLine: IconType;
  export const RiGithubLine: IconType;
  export const RiLinkedinLine: IconType;
  export const RiTwitterLine: IconType;
} 