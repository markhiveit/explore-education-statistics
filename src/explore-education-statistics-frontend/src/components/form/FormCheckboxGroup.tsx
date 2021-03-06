import Checkboxes from 'govuk-frontend/components/checkboxes/checkboxes';
import React, { Component, createRef } from 'react';
import FormCheckbox, { CheckboxChangeEventHandler } from './FormCheckbox';
import FormFieldSet, { FieldSetProps } from './FormFieldSet';

export interface CheckboxOption {
  hint?: string;
  id: string;
  label: string;
  value: string;
}

export type FormCheckboxGroupProps = {
  name: string;
  onAllChange?: CheckboxChangeEventHandler;
  onChange?: CheckboxChangeEventHandler<any>;
  options: CheckboxOption[];
  selectAll?: boolean;
  value: string[];
} & FieldSetProps;

interface State {
  checkedCount: number;
}

/**
 * Basic checkbox group that should be used as a controlled component.
 * When using Formik, use {@see FormFieldCheckboxGroup} instead.
 */
class FormCheckboxGroup extends Component<FormCheckboxGroupProps, State> {
  public static defaultProps: Partial<FormCheckboxGroupProps> = {
    legendSize: 'm',
    selectAll: false,
    value: [],
  };

  private ref = createRef<HTMLDivElement>();

  public componentDidMount(): void {
    new Checkboxes(this.ref.current).init();
  }

  public render() {
    const { value, onAllChange, name, id, options, selectAll } = this.props;
    const isAllChecked = options.every(
      option => value.indexOf(option.value) > -1,
    );

    return (
      <FormFieldSet {...this.props}>
        <div className="govuk-checkboxes" ref={this.ref}>
          {selectAll && (
            <FormCheckbox
              id={`${id}-all`}
              label="Select all"
              name={name}
              value="select-all"
              checked={isAllChecked}
              onChange={event => {
                if (onAllChange) {
                  onAllChange(event);
                }
              }}
            />
          )}

          {options.map(option => (
            <FormCheckbox
              {...option}
              name={name}
              key={option.id}
              checked={value.indexOf(option.value) > -1}
              onChange={event => {
                if (this.props.onChange) {
                  this.props.onChange(event);
                }
              }}
            />
          ))}
        </div>
      </FormFieldSet>
    );
  }
}

export default FormCheckboxGroup;
