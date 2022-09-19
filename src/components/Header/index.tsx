import { AiOutlineClose } from 'react-icons/ai';
import { ContainerRow } from '../../assets/containers';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <ContainerRow
      align="center"
      justify="space-between"
      padding="0 2rem"
      height="5.438rem"
      borderBottom="solid 1px var(--gray-800)"
    >
      <input type="text" placeholder="Pesquise sua tarefa" />
      <AiOutlineClose color="var(--blue)" font-size="1.5rem" />
    </ContainerRow>
  );
};

export default Header;
