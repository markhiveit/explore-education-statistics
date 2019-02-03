import React, { Component, HTMLAttributes, ReactNode } from 'react';
import AccordionSection from '../../../components/AccordionSection';
import Link from '../../../components/Link';
import { contentApi } from '../../../services/api';

interface Props {
  topic: string;
}

interface State {
  publications: object[];
  topic: string;
}

class PublicationList extends Component<Props> {
  public state = {
    publications: [],
    topic: '',
  };

  public componentDidMount() {
    const { topic } = this.props;
    contentApi
      .get(`topic/${topic}/publications`)
      .then(json => this.setState({ publications: json.data }))
      // tslint:disable-next-line:no-console
      .catch(error => console.log(error));
  }

  public render() {
    const { topic, publications } = this.state;

    return (
      <>
        {publications.length > 0 ? (
          <>
            {publications.map(({ id, slug, title, summary }) => (
              <li key={id}>
                <h4 className="govuk-heading-m govuk-!-margin-bottom-0">
                  <Link to={`/find-statistics-and-data/${slug}`}>{title}</Link>
                </h4>
                <p className="govuk-caption-m govuk-!-margin-top-1 govuk-!-margin-bottom-1">
                  {summary}
                </p>
              </li>
            ))}
          </>
        ) : (
          <div className="govuk-inset-text">
            No publications currently released.
          </div>
        )}
      </>
    );
  }
}

export default PublicationList;