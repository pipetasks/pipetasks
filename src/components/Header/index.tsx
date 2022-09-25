import { useForm } from 'react-hook-form';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { ContainerRow } from '../../assets/containers';
import { useThemeContext } from '../../context/themeContext';
import { Input } from '../Input';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { theme } = useThemeContext();

  const { register, handleSubmit } = useForm();
  return (
    <ContainerRow
      align="center"
      justify="space-between"
      padding="0 2rem"
      height="5.438rem"
      borderBottom="solid 1px var(--gray-800)"
      as="header"
    >
      <ContainerRow
        padding="0 1rem"
        align="center"
        border={`solid 1px ${theme.colors.input.border}`}
        borderRadius="8px"
        gap="10px"
        background={theme.colors.input.background}
        as="form"
        height="3rem"
        width="16.5rem"
      >
        <AiOutlineSearch fontSize="1.5rem" color="var(--gray-700)" />
        <Input
          type="text"
          placeholder="Pesquise sua tarefa"
          color={theme.colors.input.color}
          {...register('search')}
        />
      </ContainerRow>
      <AiOutlineClose color="var(--blue)" fontSize="1.5rem" cursor="pointer" />
    </ContainerRow>
  );
};

export default Header;
