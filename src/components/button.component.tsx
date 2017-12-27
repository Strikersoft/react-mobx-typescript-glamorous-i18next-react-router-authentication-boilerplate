import glamorous from 'glamorous';
import { Theme } from '../store/theme.store';

interface ButtonProps {
  theme: Theme;
}

export const Button = glamorous.button<ButtonProps>(
  {
    textTransform: 'uppercase'
  },
  ({ theme }) => ({
    color: theme.backgroundColor
  })
);
