import React, { Component } from 'react';
import api from '../api';
import DataList from '../components/DataList';
import Title from '../components/Title';

interface State {
  data: any[];
}

class TopicsPage extends Component<{}, State> {
  public state = {
    data: [],
  };

  public componentDidMount() {
    api
      .get('topic')
      .then(({ data }) => this.setState({ data }))
      .catch(error => alert(error));
  }

  public render() {
    const { data } = this.state;

    return (
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Title label="Topics" />
          <DataList data={data} linkIdentifier={window.location.pathname} />
        </div>
      </div>
    );
  }
}

export default TopicsPage;