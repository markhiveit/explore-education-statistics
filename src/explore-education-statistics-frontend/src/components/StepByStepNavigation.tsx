import React, { HTMLAttributes, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const StepByStepNavigation = ({ children }: Props) => (
  <div className="app-step-nav app-step-nav--large app-step-nav--active">
    <div className="app-step-nav__controls">
      <button
        aria-expanded="false"
        className="app-step-nav__button app-step-nav__button--controls js-step-controls-button"
        aria-controls="step-panel-check-youre-allowed-to-drive-1"
      >
        Show all
      </button>
    </div>
    <ol className="app-step-nav__steps">{children}</ol>
  </div>
);

export default StepByStepNavigation;