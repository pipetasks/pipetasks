import { useState } from 'react';
import styled from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

export const SideBarContainer = styled(ContainerColumn)`
  height: 100vh;
  position: fixed;
  width: 21.563rem;

  @media (max-width: 1120px) {
    display: none;
  }
`;
