import { IoIosArrowDown } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import { NavSectionProps } from './interface';

const NavSection = ({ title, children, open }: NavSectionProps) => {
  const theme = useTheme();

  return (
    <ContainerColumn
      align={open ? 'flex-start' : 'center'}
      padding={open ? '2rem 1rem' : '2rem 0.5rem'}
      gap="1.5rem"
      borderBottom="solid 1px var(-gray-200)"
      width="100%"
    >
      <ContainerRow
        as="header"
        width="100%"
        gap="4px"
        align="center"
        justify="space-between"
      >
        {open && (
          <Text
            transform="uppercase"
            variant="texting5"
            color={theme.colors.subtitle}
          >
            {title}
          </Text>
        )}
        <IoIosArrowDown fontSize="20px" color="var(--blue)" />
      </ContainerRow>
      {children}
    </ContainerColumn>
  );
};

export default NavSection;
