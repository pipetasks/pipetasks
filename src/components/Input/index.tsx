import { forwardRef, ForwardRefRenderFunction } from 'react';
import { InputProps } from './interface';
import { ContainerInput } from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...rest },
  ref
) => {
  return (
    <ContainerInput>
      <input {...rest} ref={ref} />
    </ContainerInput>
  );
};

export const Input = forwardRef(InputBase);
