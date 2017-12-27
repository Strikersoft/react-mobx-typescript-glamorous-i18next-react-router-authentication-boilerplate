import * as React from 'react';
import { observer } from 'mobx-react';
import { Route, Redirect, RouteComponentProps } from 'react-router';
import { SessionStore } from '../store/session.store';

interface UnauthenticatedRouteProps {
  path: string;
  component:
    | React.StatelessComponent<{}>
    | React.ComponentClass<{}>
    | React.ComponentClass<RouteComponentProps<{}>>;
  exact: boolean;
  sessionStore: SessionStore;
}

@observer
export class UnauthenticatedRoute extends React.Component<UnauthenticatedRouteProps> {
  render() {
    if (!this.props.sessionStore.isLogged()) {
      return (
        <Route path={this.props.path} component={this.props.component} exact={this.props.exact} />
      );
    }

    return <Redirect to="/auth" />;
  }
}
