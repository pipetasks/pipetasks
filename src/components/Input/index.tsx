import { forwardRef, ForwardRefRenderFunction } from 'react';
import { InputProps } from './interface';
import { ContainerInput } from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref
) => {
  return (
    <ContainerInput isInvalid={!!error}>
      <input {...rest} ref={ref} />
    </ContainerInput>
  );
};

export const Input = forwardRef(InputBase);
