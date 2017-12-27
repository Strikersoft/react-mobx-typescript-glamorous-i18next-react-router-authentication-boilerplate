import { observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import { SessionAPI } from '../api/session.api';
import { History } from 'history';

export enum AuthenticationState {
  pending,
  done,
  error
}

export class SessionStore {
  // observable public data
  @observable authenticationState: AuthenticationState = AuthenticationState.done;

  // osbervable private data
  @observable private isLoggedIn: boolean = false;

  // inject dependencies
  constructor(
    public sessionApi: SessionAPI,
    public browserHistory: History,
    public localStorage: Storage
  ) {}

  /**
   * Action that authenticates user
   */
  @asyncAction
  *login(username: string, password: string) {
    this.authenticationState = AuthenticationState.pending;

    try {
      yield this.sessionApi.getToken(username, password);

      this.isLoggedIn = true;

      // TODO: save token to localStorage
      // this.localStorage.setItem('token', JSON.stringify(response));

      this.browserHistory.replace('/auth');
      this.authenticationState = AuthenticationState.done;
    } catch (e) {
      this.authenticationState = AuthenticationState.error;
    }
  }

  isLogged() {
    // TODO: read token from localStorage
    return this.isLoggedIn;
  }
}
