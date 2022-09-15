import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import NavLink from '../NavLink';

interface NavSectionProps {}

const NavSection = ({}: NavSectionProps) => {
  const theme = useTheme();
  return (
    <ContainerColumn
      align="flex-start"
      padding="2rem 1rem"
      gap="1.5rem"
      borderBottom="solid 1px var(-gray-200)"
      width="100%"
    >
      <ContainerRow
        width="100%"
        gap="4px"
        align="center"
        justify="space-between"
      >
        <Text
          transform="uppercase"
          variant="texting5"
          color={theme.colors.subtitle}
        >
          dashboard
        </Text>
        <IoIosArrowUp fontSize="20px" color="var(--blue)" />
      </ContainerRow>
      <NavLink />
      <NavLink />
      <NavLink />
    </ContainerColumn>
  );
};

export default NavSection;
