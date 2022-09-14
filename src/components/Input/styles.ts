import styled from 'styled-components';

export const ContainerInput = styled.label`
  width: 100%;
  input {
    border: 0 none;

    color: var(--black);

    width: 100%;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input::placeholder {
    color: var(--black-800);
  }
`;
