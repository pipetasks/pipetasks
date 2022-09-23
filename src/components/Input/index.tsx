import { forwardRef, ForwardRefRenderFunction } from 'react';
import { useThemeContext } from '../../context/themeContext';
import { InputProps } from './interface';
import { ContainerInput } from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, color, ...rest },
  ref
) => {
  return (
    <ContainerInput isInvalid={!!error} color={color}>
      <input {...rest} ref={ref} />
    </ContainerInput>
  );
};

export const Input = forwardRef(InputBase);
