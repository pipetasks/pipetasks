import styled from 'styled-components';

interface ContainerInputProps {
  isInvalid: boolean;
}

export const ContainerInput = styled.label<ContainerInputProps>`
  width: 100%;
  input {
    border: 0 none;

    color: ${(props) =>
      props.isInvalid
        ? 'var(--red)'
        : props.color
        ? props.color
        : 'var(--black-800)'};

    width: 100%;

    background: transparent;
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input::placeholder {
    color: var(--black-800);
  }
`;
