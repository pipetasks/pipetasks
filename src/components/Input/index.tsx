import { InputCompProps } from './interface';
import { ContainerInput } from './styles';

const Input = ({ name, children, ...rest }: InputCompProps) => {
  console.log(rest);
  return (
    <ContainerInput>
      <input id={name} {...rest} />
      {children}
    </ContainerInput>
  );
};

export default Input;
