import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RouteDetail from './route_detail';


class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRoutes();
  }

  render() {
    const routes = this.props.routes;
    return (
      <div className="route-index-component">
        <div className="route-index-header">
          <h1>My Routes</h1>
          <Link to="/routes/new" className="new-route-button">
            Create New Route
          </Link>
        </div>
        <div className="route-detail-container">
          <ul>
            {routes.map(route => <RouteDetail key={route.id} route={route} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(RouteIndex);