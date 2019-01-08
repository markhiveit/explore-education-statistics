import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  className,
  disabled = false,
  type = 'button',
}: Props) => {
  const classes = classNames(
    'govuk-button',
    {
      'govuk-button--disabled': disabled,
    },
    className,
  );

  return (
    <button
      aria-disabled={disabled}
      className={classes}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
