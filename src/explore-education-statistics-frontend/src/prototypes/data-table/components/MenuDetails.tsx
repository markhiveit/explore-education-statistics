import GovUkDetails from 'govuk-frontend/components/details/details';
import React, { Component, createRef, ReactNode } from 'react';
import styles from './MenuDetails.module.scss';

interface Props {
  children?: ReactNode;
  onToggle?: (isOpen: boolean) => void;
  open?: boolean;
  summary: string;
}

class MenuDetails extends Component<Props> {
  private ref = createRef<HTMLDetailsElement>();

  public componentDidMount(): void {
    new GovUkDetails(this.ref.current).init();
  }

  public render() {
    const { children, open, onToggle, summary } = this.props;

    return (
      <details className={styles.details} open={open} ref={this.ref}>
        <summary
          className="govuk-details__summary"
          onClick={event => {
            if (onToggle) {
              event.preventDefault();
              onToggle(!open);
            }
          }}
        >
          <span className="govuk-details__summary-text">{summary}</span>
        </summary>
        <div className={styles.content}>{children}</div>
      </details>
    );
  }
}

export default MenuDetails;
