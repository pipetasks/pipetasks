import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import { MdMenuOpen } from 'react-icons/md';

interface HeaderNavProps {}

const HeaderNav = ({}: HeaderNavProps) => {
  return (
    <ContainerRow
      as="header"
      borderBottom="1px solid var(--gray-800)"
      align="center"
      justify="space-between"
      padding="0 2rem"
      width="100%"
      height="5.438rem"
    >
      <Text color="var(--black-800)" variant="texting3">
        Dashboard
      </Text>
      <MdMenuOpen color="var(--gray-800)" fontSize="1.5rem" />
    </ContainerRow>
  );
};

export default HeaderNav;
