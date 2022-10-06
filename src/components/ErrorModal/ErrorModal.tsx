// React
import React from 'react';

// Context
import { useThemeContext } from '../../context/themeContext';

// Redux
import { resetError } from '../../redux/slices/error/errorSlice';
import { useDispatch, useSelector } from 'react-redux';

// Types
import type { RootState } from '../../redux/store';

// Styles
import { Container, Title, TimeLine, FlexController } from './styles';

const ErrorModal = () => {
  
  const { theme } = useThemeContext();
  const { message } = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(resetError())
  }, 5000); // UI preview timeout

  return (
   <Container
      background={theme.colors.background}
    >
      <FlexController>
        <Title>
          { message }
        </Title>
        <TimeLine />
      </FlexController>
   </Container>
  );
}

export { ErrorModal };