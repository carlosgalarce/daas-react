/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
// import { Container } from 'reactstrap';
// core components
import AdminNavbar from '../components/Navbars/AdminNavbar';
import AdminFooter from '../components/Footers/AdminFooter';
import Sidebar from '../components/Sidebar/Sidebar';

import routes from '../routes';
import { connect, useDispatch } from 'react-redux';
import { AuthActions } from '../store/ducks/auth-duck';
import { SettingsActions } from '../store/ducks/settings-duck';
import { useAuth0 } from '../views/AuthPages/react-auth0-spa';
import { Container } from 'reactstrap';

function GetUser() {
  const dispatch = useDispatch();
  const { user, } = useAuth0();
  useEffect(() => {
    if (user) {
      dispatch(AuthActions.setUser(user));
      dispatch(AuthActions.getUserProfile());
    }
  }, [user, dispatch]);

  return (<></>);
}
class Admin extends React.Component {

  componentDidMount() {
    this.props.getSettings();
  }
  componentDidUpdate(/* e */) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (/* path */) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  render() {
    return (
      <>
        <GetUser />
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: '/index',
            imgSrc: require('../assets/img/brand/argon-react.png'),
            imgAlt: '...'
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/yourvehicle" />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    user: store?.auth?.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(AuthActions.setUser(user)),
    getSettings: () => dispatch(SettingsActions.getSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
