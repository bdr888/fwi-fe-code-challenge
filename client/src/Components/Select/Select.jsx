import React from 'react';
import { func, string, objectOf } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

const Select = ({ label, name, onChange, options, selectId }) => (
  <Wrapper>
    <Label htmlFor={selectId}>{label}:</Label>
    <select id={selectId} name={name} onChange={onChange}>
      {<option value="">Please choose a country</option>}
      {Object.values(options).map(item => (
        <option key={item} value={options[item.value]}>
          {item}
        </option>
      ))}
    </select>
  </Wrapper>
);

Select.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  options: objectOf(string.isRequired).isRequired,
  selectId: string.isRequired,
};

export default Select;
