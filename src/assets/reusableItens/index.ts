import styled from 'styled-components';
import { variants } from './constants';
import { TextProps } from './interface';

export const Text = styled.p<TextProps>`
  font-weight: ${props =>
    props.variant
      ? variants[props.variant].weight
      : props.weight
      ? props.weight
      : 400};

  font-size: ${props =>
    props.variant
      ? variants[props.variant].size
      : props.size
      ? props.size
      : '1rem'};

  color: ${props => (props.color ? props.color : 'var(--black-800)')};
`;
