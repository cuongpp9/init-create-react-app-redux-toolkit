import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RouteNames from './RouteNames';
import Layout from 'containers/Layouts';
import LandingPage from 'containers/LandingPage';
// import Dashboard from '../Dashboard';
// import CustomerPage from '../CustomerPage';
// import Invoice from '../Invoice';
// import PricingManagement from '../PricingManagement';
// import BundleManagement from '../BundleManagement';
// import PaymentsPage from '../PaymentsPage';
// import OrderPage from '../OrderPage';
// import UserManagement from '../UserManagement';
// import JobManagement from '../JobManagement';
// import TenantManagement from '../TenantManagement';
// import ManageProfile from '../ManageProfile';
// import ArOperations from '../ArOperations';
// import Collections from '../Collections';
// import BaseConfigurations from '../BaseConfigurations';
// import ReportManagement from '../ReportManagement';
// import RevenueManagemnet from '../RevenueManagemnet';
// import RevenueConfiguration from '../RevenueConfiguration';
// import TaxationManagement from '../TaxationManagement';
// import BillingManagement from '../BillingManagement';

const wrappedRoutes = () => (
  <Layout>
    <Switch>
      {/* <Route path={RouteNames.taxation.path} component={TaxationManagement} />
      <Route path={RouteNames.billing.path} component={BillingManagement} /> */}
    </Switch>
  </Layout>
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RouteNames.landing.path} component={LandingPage} />
      <PrivateRoute path="" component={wrappedRoutes} />
    </Switch>
  </BrowserRouter>
);

export default Router;
