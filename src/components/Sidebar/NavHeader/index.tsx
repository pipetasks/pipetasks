import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import { MdMenuOpen } from 'react-icons/md';
import { useTheme } from 'styled-components';

interface NavHeaderProps {
  handleSideOpen(): void;
  open: boolean;
}

const NavHeader = ({ handleSideOpen, open }: NavHeaderProps) => {
  const theme = useTheme();
  return (
    <ContainerRow
      as="header"
      borderBottom="1px solid var(--gray-800)"
      align="center"
      justify={open ? 'space-between' : 'center'}
      padding={open ? '0 2rem' : '0 1rem'}
      width="100%"
      height="5.438rem"
    >
      {open && (
        <Text color={theme.colors.title} variant="texting3">
          Dashboard
        </Text>
      )}
      <MdMenuOpen
        color="var(--gray-800)"
        fontSize="1.5rem"
        cursor="pointer"
        onClick={handleSideOpen}
      />
    </ContainerRow>
  );
};

export default NavHeader;
