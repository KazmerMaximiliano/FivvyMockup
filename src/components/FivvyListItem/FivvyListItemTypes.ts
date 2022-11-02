import { ViewProps } from 'react-native';

export interface FivvyListItemProps extends ViewProps {
  idx?: number;
  width: number;
  title?: string;
  caption?: string;
  action?: string;
  color?: string;
}
