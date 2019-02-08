import classNames from 'classnames';
import React, {
  cloneElement,
  Component,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefAttributes,
} from 'react';
import isComponentType from '../lib/type-guards/components/isComponentType';
import TabsSection, { TabsSectionProps } from './TabsSection';

interface Props {
  children: ReactNode;
}

interface State {
  selectedTabIndex: number;
}

class Tabs extends Component<Props, State> {
  public state = {
    selectedTabIndex: 0,
  };

  private tabElements: HTMLAnchorElement[] = [];
  private sectionElements: HTMLElement[] = [];

  public render() {
    const { children } = this.props;
    const { selectedTabIndex } = this.state;

    const sections = this.filterSections(children);

    return (
      <div className="govuk-tabs">
        <ul className="govuk-tabs__list" role="tablist">
          {sections.map(({ props }, index) => (
            <li
              className="govuk-tabs__list-item"
              key={props.id}
              role="presentation"
            >
              <a
                aria-controls={props.id}
                aria-selected={selectedTabIndex === index}
                className={classNames('govuk-tabs__tab', {
                  'govuk-tabs__tab--selected': selectedTabIndex === index,
                })}
                href={`#${props.id}`}
                id={`${props.id}-tab`}
                ref={(element: HTMLAnchorElement) =>
                  this.tabElements.push(element)
                }
                role="tab"
                onClick={event => {
                  event.preventDefault();
                  this.setState({ selectedTabIndex: index });
                }}
                onKeyDown={event => {
                  switch (event.key) {
                    case 'ArrowLeft': {
                      const nextTabIndex =
                        selectedTabIndex > 0
                          ? selectedTabIndex - 1
                          : sections.length - 1;

                      this.setState({ selectedTabIndex: nextTabIndex });
                      this.tabElements[nextTabIndex].focus();

                      break;
                    }
                    case 'ArrowRight': {
                      const nextTabIndex =
                        selectedTabIndex < sections.length - 1
                          ? selectedTabIndex + 1
                          : 0;

                      this.setState({ selectedTabIndex: nextTabIndex });
                      this.tabElements[nextTabIndex].focus();

                      break;
                    }
                    case 'ArrowDown':
                      this.sectionElements[selectedTabIndex].focus();
                      break;
                  }
                }}
                tabIndex={selectedTabIndex !== index ? -1 : undefined}
              >
                {props.title}
              </a>
            </li>
          ))}
        </ul>

        {sections.map((section, index) => {
          const { id } = section.props;

          return cloneElement<
            TabsSectionProps &
              HTMLAttributes<HTMLElement> &
              RefAttributes<HTMLElement>
          >(section, {
            'aria-labelledby': `${id}-tab`,
            hidden: selectedTabIndex !== index,
            key: id,
            ref: (element: HTMLElement) => this.sectionElements.push(element),
          });
        })}
      </div>
    );
  }

  private filterSections(children: ReactNode) {
    let sections: ReactElement<TabsSectionProps>[] = [];

    if (Array.isArray(children)) {
      sections = children.filter(child =>
        isComponentType(child, TabsSection),
      ) as ReactElement<TabsSectionProps>[];
    }

    if (isComponentType(children, TabsSection)) {
      sections = [children];
    }

    return sections;
  }
}

export default Tabs;
