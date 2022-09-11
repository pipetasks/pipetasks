import styled from 'styled-components';

export const ContainerInput = styled.label`
  display: flex;
  align-items: center;
  width: 21rem;

  border-bottom: solid 3px var(--black-800);

  input {
    border: 0 none;

    color: var(--black);

    width: 100%;
  }

  input::placeholder {
    color: var(--black-800);
  }
`;
