import styled from 'styled-components';

export const ContainerInput = styled.label`
  display: flex;
  align-items: center;
  width: 21rem;
  padding-bottom: 4px;
  border-bottom: solid 3px var(--black-800);

  svg {
    color: var(--black-800);
    font-size: 1.125rem;
  }

  input {
    border: 0 none;

    color: var(--black);

    width: 100%;
  }

  input::placeholder {
    color: var(--black-800);
  }
`;
