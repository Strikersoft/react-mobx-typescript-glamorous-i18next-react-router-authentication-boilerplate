import glamorous from 'glamorous';
import { Theme } from '../store/theme.store';

interface InputProps {
  theme: Theme;
}

export const Input = glamorous.input<InputProps>(
  {
    border: 'none'
  },
  ({ theme }) => ({
    borderColor: theme.backgroundColor
  })
);
