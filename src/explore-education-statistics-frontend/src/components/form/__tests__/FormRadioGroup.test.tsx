import React, { Component } from 'react';
import { fireEvent, render } from 'react-testing-library';
import { RadioChangeEventHandler } from '../FormRadio';
import FormRadioGroup from '../FormRadioGroup';

describe('FormRadioGroup', () => {
  test('renders list of radios in correct order', () => {
    const { container, getAllByLabelText } = render(
      <FormRadioGroup
        value={null}
        id="test-radios"
        name="test-radios"
        options={[
          { id: 'radio-1', label: 'Test radio 1', value: '1' },
          { id: 'radio-2', label: 'Test radio 2', value: '2' },
          { id: 'radio-3', label: 'Test radio 3', value: '3' },
        ]}
      />,
    );

    const radios = getAllByLabelText(/Test radio/);

    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute('value', '1');
    expect(radios[1]).toHaveAttribute('value', '2');
    expect(radios[2]).toHaveAttribute('value', '3');

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('clicking a radio checks it', () => {
    class RadioWrapper extends Component {
      public state = {
        value: null,
      };

      private handleChange: RadioChangeEventHandler = event => {
        this.setState({
          value: event.target.value,
        });
      };

      public render() {
        return (
          <FormRadioGroup
            value={this.state.value}
            onChange={this.handleChange}
            id="test-radios"
            name="test-radios"
            options={[{ id: 'radio-1', label: 'Test radio', value: '1' }]}
          />
        );
      }
    }

    const { getByLabelText } = render(<RadioWrapper />);

    const radio = getByLabelText('Test radio') as HTMLInputElement;

    expect(radio.checked).toBe(false);

    fireEvent.click(radio);

    expect(radio.checked).toBe(true);
  });

  test('clicking radios toggles between them', () => {
    class RadioWrapper extends Component {
      public state = {
        value: null,
      };

      private handleChange: RadioChangeEventHandler = event => {
        this.setState({
          value: event.target.value,
        });
      };

      public render() {
        return (
          <FormRadioGroup
            value={this.state.value}
            onChange={this.handleChange}
            id="test-radios"
            name="test-radios"
            options={[
              { id: 'radio-1', label: 'Test radio 1', value: '1' },
              { id: 'radio-2', label: 'Test radio 2', value: '2' },
            ]}
          />
        );
      }
    }

    const { getByLabelText } = render(<RadioWrapper />);

    const radio1 = getByLabelText('Test radio 1') as HTMLInputElement;
    const radio2 = getByLabelText('Test radio 2') as HTMLInputElement;

    fireEvent.click(radio1);

    expect(radio1.checked).toBe(true);
    expect(radio2.checked).toBe(false);

    fireEvent.click(radio2);

    expect(radio1.checked).toBe(false);
    expect(radio2.checked).toBe(true);
  });

  test('renders correctly with legend', () => {
    const { container, getByText } = render(
      <FormRadioGroup
        value={null}
        legend="Choose a radio"
        id="test-radios"
        name="test-radios"
        options={[
          { id: 'radio-1', label: 'Test radio 1', value: '1' },
          { id: 'radio-2', label: 'Test radio 2', value: '2' },
          { id: 'radio-3', label: 'Test radio 3', value: '3' },
        ]}
      />,
    );

    expect(getByText('Choose a radio')).toBeDefined();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
