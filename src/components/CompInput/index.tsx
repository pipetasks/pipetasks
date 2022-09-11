import { CompInputProps } from './interface';
import { ContainerInput } from './styles';

const CompInput = ({}: CompInputProps) => {
  return (
    <ContainerInput>
      <input type="text" placeholder="email" />
    </ContainerInput>
  );
};

export default CompInput;
