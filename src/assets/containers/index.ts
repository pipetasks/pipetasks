import styled from 'styled-components';
import { ContainerProps } from './interface';

export const ContainerColumn = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  max-width: ${props => props.mw ?? props.mw};
`;
export const ContainerRow = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  max-width: ${props => props.mw ?? props.mw};
`;
