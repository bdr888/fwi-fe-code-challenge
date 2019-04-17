import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export { ComponentWrapper, FormWrapper, ButtonWrapper };
