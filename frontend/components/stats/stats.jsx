import React from 'react';

import UserStats from './user_stats';
import WeekStats from './week_stats';

class Stats extends React.Component {
  componentWillMount() {
    this.props.requestAllStats();
  }

  statsReceived() {
    if (Object.keys(this.props.stats).length === 0) {
      return null;
    }

    return (
      <div>
        <div className="user-stats-container">
          <div className="user-card">
            <UserStats userStats={this.props.stats.userStats} />
          </div>
        </div>
        <div className="weekly-stats-container">
          <div className="stats-card">
            <WeekStats weekStats={this.props.stats.weekStats} />
          </div>
        </div>
      </div>
    );
  }

  render() {
      return(
        <div>
          {this.statsReceived()}
        </div>
      );
  }
}

export default Stats;
