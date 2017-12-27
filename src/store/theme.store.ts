import { observable, action } from 'mobx';

export enum ThemeOption {
  dark,
  light
}

export interface Theme {
  backgroundColor: string;
}

export const darkTheme: Theme = {
  backgroundColor: 'black'
};

export const lightTheme: Theme = {
  backgroundColor: '#ccc'
};

export class ThemeStore {
  // osbervable private data
  @observable currentTheme: ThemeOption = ThemeOption.light;

  // inject dependencies
  constructor(public localStorage: Storage) {
    // TODO: read current theme from storage
  }

  /**
   * Action that change current theme
   */
  @action
  changeTheme(theme: ThemeOption) {
    this.currentTheme = theme;

    // TODO: same current theme to storage
  }

  getCurrentTheme() {
    switch (this.currentTheme) {
      case ThemeOption.dark:
        return darkTheme;
      case ThemeOption.light:
        return lightTheme;
      default:
        return lightTheme;
    }
  }
}
