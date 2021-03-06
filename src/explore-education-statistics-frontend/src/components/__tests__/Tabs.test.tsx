import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Tabs from '../Tabs';
import TabsSection from '../TabsSection';

describe('Tabs', () => {
  test('renders single tab correctly', () => {
    const { container } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
      </Tabs>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('renders multiple tabs correctly', () => {
    const { container } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
        <TabsSection id="section-2" title="Tab 2">
          <p>Test section 2 content</p>
        </TabsSection>
      </Tabs>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('does not immediately render lazy tab section', () => {
    const { queryByText } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
        <TabsSection id="section-2" title="Tab 2" lazy>
          <p>Test section 2 content</p>
        </TabsSection>
      </Tabs>,
    );

    expect(queryByText('Test section 1 content')).not.toBeNull();
    expect(queryByText('Test section 2 content')).toBeNull();
  });

  test('tab links match section ids', () => {
    const { getByText } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
        <TabsSection id="section-2" title="Tab 2">
          <p>Test section 2 content</p>
        </TabsSection>
      </Tabs>,
    );

    expect(getByText('Tab 1')).toHaveAttribute('href', '#section-1');
    expect(getByText('Tab 2')).toHaveAttribute('href', '#section-2');
  });

  test('clicking tab reveals correct section', () => {
    const { getByText, container } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
        <TabsSection id="section-2" title="Tab 2">
          <p>Test section 2 content</p>
        </TabsSection>
      </Tabs>,
    );

    const tabSection1 = container.querySelector('#section-1') as HTMLElement;
    const tabSection2 = container.querySelector('#section-2') as HTMLElement;

    expect(tabSection1.hidden).toBe(false);
    expect(tabSection2.hidden).toBe(true);

    fireEvent.click(getByText('Tab 2'));

    expect(tabSection1.hidden).toBe(true);
    expect(tabSection2.hidden).toBe(false);
  });

  test('clicking tab renders lazy section', () => {
    const { getByText, queryByText } = render(
      <Tabs>
        <TabsSection id="section-1" title="Tab 1">
          <p>Test section 1 content</p>
        </TabsSection>
        <TabsSection id="section-2" title="Tab 2" lazy>
          <p>Test section 2 content</p>
        </TabsSection>
      </Tabs>,
    );

    expect(queryByText('Test section 2 content')).toBeNull();

    fireEvent.click(getByText('Tab 2'));

    expect(queryByText('Test section 2 content')).not.toBeNull();
  });

  describe('keyboard interactions', () => {
    let tab1: HTMLAnchorElement;
    let tab2: HTMLAnchorElement;
    let tab3: HTMLAnchorElement;
    let tabSection1: HTMLElement;
    let tabSection2: HTMLElement;
    let tabSection3: HTMLElement;

    beforeEach(() => {
      const { getByText, container } = render(
        <Tabs>
          <TabsSection id="section-1" title="Tab 1">
            <p>Test section 1 content</p>
          </TabsSection>
          <TabsSection id="section-2" title="Tab 2">
            <p>Test section 2 content</p>
          </TabsSection>
          <TabsSection id="section-3" title="Tab 3">
            <p>Test section 2 content</p>
          </TabsSection>
        </Tabs>,
      );

      tab1 = getByText('Tab 1') as HTMLAnchorElement;
      tab2 = getByText('Tab 2') as HTMLAnchorElement;
      tab3 = getByText('Tab 3') as HTMLAnchorElement;

      tabSection1 = container.querySelector('#section-1') as HTMLElement;
      tabSection2 = container.querySelector('#section-2') as HTMLElement;
      tabSection3 = container.querySelector('#section-3') as HTMLElement;
    });

    test('pressing left arrow key moves to previous tab', () => {
      fireEvent.click(tab2);

      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect(tab2).toHaveAttribute('aria-selected', 'true');
      expect(tabSection1.hidden).toBe(true);
      expect(tabSection2.hidden).toBe(false);

      fireEvent.keyDown(tab2, { key: 'ArrowLeft' });

      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab1).toHaveFocus();
      expect(tab2).toHaveAttribute('aria-selected', 'false');

      expect(tabSection1.hidden).toBe(false);
      expect(tabSection2.hidden).toBe(true);
    });

    test('pressing left arrow key cycles to end of tabs', () => {
      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab3).toHaveAttribute('aria-selected', 'false');
      expect(tabSection1.hidden).toBe(false);
      expect(tabSection3.hidden).toBe(true);

      fireEvent.keyDown(tab1, { key: 'ArrowLeft' });

      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect(tab3).toHaveAttribute('aria-selected', 'true');
      expect(tab3).toHaveFocus();

      expect(tabSection1.hidden).toBe(true);
      expect(tabSection3.hidden).toBe(false);
    });

    test('pressing right arrow key moves to next tab', () => {
      fireEvent.click(tab2);

      expect(tab2).toHaveAttribute('aria-selected', 'true');
      expect(tab3).toHaveAttribute('aria-selected', 'false');
      expect(tabSection2.hidden).toBe(false);
      expect(tabSection3.hidden).toBe(true);

      fireEvent.keyDown(tab2, { key: 'ArrowRight' });

      expect(tab2).toHaveAttribute('aria-selected', 'false');
      expect(tab3).toHaveAttribute('aria-selected', 'true');
      expect(tab3).toHaveFocus();

      expect(tabSection2.hidden).toBe(true);
      expect(tabSection3.hidden).toBe(false);
    });

    test('pressing right arrow key cycles to beginning of tabs', () => {
      fireEvent.click(tab3);

      expect(tab1).toHaveAttribute('aria-selected', 'false');
      expect(tab3).toHaveAttribute('aria-selected', 'true');
      expect(tabSection1.hidden).toBe(true);
      expect(tabSection3.hidden).toBe(false);

      fireEvent.keyDown(tab3, { key: 'ArrowRight' });

      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab1).toHaveFocus();
      expect(tab3).toHaveAttribute('aria-selected', 'false');
      expect(tabSection1.hidden).toBe(false);
      expect(tabSection3.hidden).toBe(true);
    });

    test('pressing down arrow key focuses the tab section', async () => {
      expect(tab1).toHaveAttribute('aria-selected', 'true');

      fireEvent.keyDown(tab1, { key: 'ArrowDown' });

      expect(tabSection1).toHaveFocus();
    });
  });
});
