import React from 'react';
import { bool, func, string, oneOf } from 'prop-types';
import styled from 'styled-components';
import { vivid } from '../../colors';

const buttonStyles = {
  primary: {
    'background-color': vivid,
    'font-style': 'normal',
    border: 'none',
  },
  secondary: {
    'background-color': 'transparent',
    'font-style': 'italic',
    border: 'none',
  },
};

const getButtonStyle = (style, attribute) => buttonStyles[style][attribute];

const Wrapper = styled.button`
  margin: 1rem auto;
  background-color: ${props =>
    getButtonStyle(props.buttonStyle, 'background-color')};
  font-weight: 600;
  font-style: ${props => getButtonStyle(props.buttonStyle, 'font-style')};
  color: black;
`;

const Button = ({
  isDisabled,
  buttonStyle,
  buttonText,
  name,
  onClick,
  type,
  value,
}) => (
  <Wrapper
    buttonStyle={buttonStyle}
    disabled={isDisabled}
    name={name}
    onClick={onClick}
    type={type}
    value={value}
  >
    {buttonText}
  </Wrapper>
);

Button.propTypes = {
  buttonText: string.isRequired,
  buttonStyle: oneOf(['primary', 'secondary']),
  disabled: bool,
  name: string,
  onClick: func.isRequired,
  type: oneOf(['submit', 'reset', 'button']).isRequired,
  value: string,
};

Button.defaultProps = {
  buttonStyle: 'primary',
};

export default Button;
