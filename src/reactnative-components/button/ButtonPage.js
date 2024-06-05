import React from 'react';
import ComponentLayout from '../../containers/component-layout/ComponentLayout';
import ButtonComponents from './ButtonComponents';

const ButtonPage = () => {
  const filePath = "button/ButtonComponents.js";

  return (
    <div>
      <ComponentLayout filePath={filePath} Component={ButtonComponents} />
    </div>
  );
};

export default ButtonPage;
