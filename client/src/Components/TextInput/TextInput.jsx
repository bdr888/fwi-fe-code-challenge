import React from 'react';
import { bool, func, string, oneOf } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: 600;
  padding: 0.5rem;

  @media (min-width: 700px) {
    padding: 0 0.5rem;
  }
`;

const TextInput = ({
  inputId,
  labelText,
  name,
  onChange,
  placeholder,
  required,
  type,
}) => (
  <Wrapper>
    <Label htmlFor={inputId}>{labelText}:</Label>
    <input
      required={required}
      id={inputId}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  </Wrapper>
);

TextInput.propTypes = {
  inputId: string.isRequired,
  labelText: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
  required: bool,
  type: oneOf(['text', 'number']).isRequired,
};

TextInput.defaultProps = {
  required: true,
};

export default TextInput;
