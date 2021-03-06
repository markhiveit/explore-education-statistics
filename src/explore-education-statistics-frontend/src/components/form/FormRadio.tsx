import React, { ChangeEventHandler, FunctionComponent } from 'react';

export type RadioChangeEventHandler<T = HTMLInputElement> = ChangeEventHandler<
  T
>;

interface Props {
  checked?: boolean;
  hint?: string;
  id: string;
  label: string;
  name: string;
  onChange?: RadioChangeEventHandler;
  value: string;
}

const FormRadio: FunctionComponent<Props> = ({
  checked,
  hint,
  id,
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="govuk-radios__item">
      <input
        aria-describedby={hint ? `${id}-item-hint` : undefined}
        className="govuk-radios__input"
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label className="govuk-label govuk-radios__label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <span id={`${id}-item-hint`} className="govuk-hint govuk-radios__hint">
          {hint}
        </span>
      )}
    </div>
  );
};

export default FormRadio;
