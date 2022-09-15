import { ReactNode } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: NavSectionProps) => {
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
          {title}
        </Text>
        <IoIosArrowUp fontSize="20px" color="var(--blue)" />
      </ContainerRow>
      {children}
    </ContainerColumn>
  );
};

export default NavSection;
