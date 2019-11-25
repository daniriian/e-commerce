/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
  return (
    <div>
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </div>
  );
};

export default CustomButton;
