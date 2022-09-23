import styled from 'styled-components';
import { textVariants, buttonVariants } from './constants';
import { ButtonProps, SpanProps, TextProps } from './interface';

export const Text = styled.h1<TextProps>`
  font-weight: ${(props) =>
    props.variant
      ? textVariants[props.variant].weight
      : props.weight
      ? props.weight
      : 400};

  font-size: ${(props) =>
    props.variant
      ? textVariants[props.variant].size
      : props.size
      ? props.size
      : '1rem'};

  color: ${(props) => (props.color ? props.color : 'var(--black-900)')};

  text-transform: ${(props) => props.transform ?? props.transform};

  text-align: ${(props) => (props.align ? props.align : 'center')};

  max-width: ${(props) => props.mw ?? props.mw};
  padding: ${(props) => props.padding ?? props.padding};
`;

export const Span = styled.span<SpanProps>`
  color: ${(props) => (props.color ? props.color : 'var(--blue)')};

  font-weight: ${(props) =>
    props.variant
      ? textVariants[props.variant].weight
      : props.weight
      ? props.weight
      : 800};

  font-size: ${(props) =>
    props.variant
      ? textVariants[props.variant].size
      : props.size
      ? props.size
      : '1rem'};

  font-family: inherit;
`;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  color: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].color
      : props.color
      ? props.color
      : 'var(--black-800)'};
  background: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].background
      : props.background
      ? props.background
      : 'var(--white-200)'};
  padding: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].padding
      : props.padding
      ? props.padding
      : ''};
  border: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].border
      : props.border
      ? props.border
      : 'solid 1px var(--black-800)'};
  border-radius: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].borderRadius
      : props.borderRadius
      ? props.borderRadius
      : '8px'};
  font-size: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].fontSize
      : props.fontSize
      ? props.fontSize
      : '1rem'};
  font-weight: ${(props) =>
    props.variant
      ? buttonVariants[props.variant].fontWeight
      : props.fontWeight
      ? props.fontWeight
      : 500};

  transition: all 0.4s;

  &:hover {
    background: ${(props) =>
      props.variant
        ? buttonVariants[props.variant].backgroundHover
        : props.backgroundHover
        ? props.backgroundHover
        : 'var(--gray-200)'};

    transform: scale(1.05);
  }
`;
