import styled from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

export const SideFooterContainer = styled(ContainerRow)`
  display: none;

  position: fixed;
  bottom: 0;

  @media (max-width: 1120px) {
    display: flex;
  }
`;
