// 3rd party dependencies
import * as React from 'react';
import { Provider, observer } from 'mobx-react';
import { Switch, Router } from 'react-router';
import { ThemeProvider } from 'glamorous';

// environment
import * as env from './environment';

// pages
import { AuthorizedPage } from './pages/authorized.page';
import { LoginPage } from './pages/login.page';

// route types
import { AuthenticatedRoute } from './routes/authenticated.route';
import { UnauthenticatedRoute } from './routes/unauthenticated.route';

@observer
export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={env.themeStore.getCurrentTheme()}>
        <Provider sessionStore={env.sessionStore} themeStore={env.themeStore}>
          <Router history={env.history}>
            <Switch>
              <UnauthenticatedRoute
                path="/"
                component={LoginPage}
                exact={true}
                sessionStore={env.sessionStore}
              />
              <AuthenticatedRoute
                path="/auth"
                component={AuthorizedPage}
                exact={true}
                sessionStore={env.sessionStore}
              />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}
