import * as React from 'react';
import { inject } from 'mobx-react';

import { Button } from '../components/button.component';
import { ThemeStore, ThemeOption } from '../store/theme.store';
import { translate } from '../utils/translate';

const t = translate(['auth']);

interface AuthorizedPageProps {
  themeStore: ThemeStore;
}

@inject('themeStore')
export class AuthorizedPage extends React.Component<AuthorizedPageProps> {
  changeToDarkTheme = () => {
    this.props.themeStore.changeTheme(ThemeOption.dark);
  };

  render() {
    return <Button onClick={this.changeToDarkTheme}>{t('toggleThemeToDark')}</Button>;
  }
}
