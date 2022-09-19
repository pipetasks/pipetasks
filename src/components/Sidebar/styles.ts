import { useState } from 'react';
import styled from 'styled-components';
import { ContainerColumn } from '../../assets/containers';

interface SideBarContainerProps {
  open: boolean;
}

export const SideBarContainer = styled(ContainerColumn)<SideBarContainerProps>`
  height: 100vh;
  position: fixed;
  width: ${({ open }) => (open ? '21.563rem' : '5rem')};

  /* @media (max-width: 400px) {
    width: 18rem;
  } */
`;
