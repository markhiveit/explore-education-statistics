import classNames from 'classnames';
import React, {
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  Ref,
} from 'react';
import styles from './TabsSection.module.scss';

export interface TabsSectionProps {
  children: ReactNode;
  id: string;
  /**
   * Set to true if children should not be
   * rendered until tab has been selected.
   */
  lazy?: boolean;
  title: string;
}

const TabsSection: FunctionComponent<TabsSectionProps> = forwardRef(
  (
    { children, id, lazy = false, ...restProps }: TabsSectionProps,
    ref: Ref<HTMLElement>,
  ) => {
    // Hide additional props from the component's public API to
    // avoid any confusion over this component's usage as
    // it should only be used in combination with Tabs.
    const tabProps = restProps as HTMLAttributes<HTMLElement>;

    return (
      <section
        aria-labelledby={tabProps['aria-labelledby']}
        className={classNames('govuk-tabs__panel', styles.panel, {
          'govuk-tabs__panel--hidden': tabProps.hidden,
        })}
        id={id}
        hidden={tabProps.hidden}
        ref={ref}
        onMouseDown={event => event.preventDefault()}
        role="tabpanel"
        tabIndex={-1}
      >
        {children}
      </section>
    );
  },
);

TabsSection.displayName = 'TabsSection';

export default TabsSection;
