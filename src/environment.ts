import axios from 'axios';
import { useStrict } from 'mobx';
import { SessionAPI } from './api/session.api';
import { SessionStore } from './store/session.store';
import { ThemeStore } from './store/theme.store';
import { createBrowserHistory } from 'history';

// initialize mobx in FLUX mode
useStrict(true);

// initialize http client dependency
const http = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

// initialize browserHistory dependency
const history = createBrowserHistory();

// initialize services with dependencies
const sessionApi = new SessionAPI(http);

// initialzie stores with dependencies
const sessionStore = new SessionStore(sessionApi, history, window.localStorage);
const themeStore = new ThemeStore(window.localStorage);

// expose helpers
export { http, history };

// expose services
export { sessionApi };

// expose stores
export { sessionStore, themeStore };
