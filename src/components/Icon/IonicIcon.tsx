import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const IonicIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <g fill="#4e8ef7"><circle cx="64" cy="64" r="24.08"></circle><path d="M113.14 23.14a8.27 8.27 0 00-13.7-6.25 59 59 0 1011.67 11.67 8.24 8.24 0 002.03-5.42zM64 121A57 57 0 1198.1 18.36a8.27 8.27 0 0011.53 11.53A57 57 0 0164 121z"></path></g>
  </Icon>
));

export default IonicIcon;
