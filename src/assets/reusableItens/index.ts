import styled from 'styled-components';
import { variants } from './constants';
import { SpanProps, TextProps } from './interface';

export const Text = styled.h1<TextProps>`
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

  color: ${props => (props.color ? props.color : 'var(--black-900)')};

  text-transform: ${props => props.transform ?? props.transform};

  text-align: ${props => (props.align ? props.align : 'center')};

  max-width: ${props => props.mw ?? props.mw};
`;

export const Span = styled.span<SpanProps>`
  color: ${props => (props.color ? props.color : 'var(--blue)')};

  font-weight: ${props =>
    props.variant
      ? variants[props.variant].weight
      : props.weight
      ? props.weight
      : 800};

  font-size: ${props =>
    props.variant
      ? variants[props.variant].size
      : props.size
      ? props.size
      : '1rem'};

  font-family: inherit;
`;
