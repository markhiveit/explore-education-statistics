import React, { Component } from 'react';
import DataList from '../components/DataList';
import Title from '../components/Title';
import API from '../api';

interface Props {
}

interface State {
  data: any[]
}

class Publications extends Component<Props, State> {
  state = {
    data: [],
  };

  componentDidMount() {
    API.get('publication')
      .then(({ data }) => this.setState({ data }))
      .catch(error => alert(error));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Title label="Publications" />
          <DataList data={data} linkIdentifier={window.location.pathname} />
        </div>
      </div>
    );
  }
}

export default Publications;
