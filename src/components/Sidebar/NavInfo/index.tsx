import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

const NavInfo = () => {
  const theme = useTheme();
  return (
    <ContainerRow
      justify="space-between"
      padding="0 1rem"
      width="100%"
      borderBottom="solid 1px var(--gray-800)"
      height="5.438rem"
      align="center"
    >
      <ContainerRow
        background="blue"
        width="56px"
        height="56px"
        borderRadius="100%"
      />
      <ContainerColumn align="flex-start">
        <Text variant="texting5" color={theme.colors.title}>
          Natalia Nunes
        </Text>
        <Text variant="texting7" color={theme.colors.subtitle}>
          Advogada
        </Text>
      </ContainerColumn>
    </ContainerRow>
  );
};

export default NavInfo;
