// Redux
import { useSelector } from 'react-redux';

// Components
import { Text } from '../../../assets/reusableItens';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';

// Context
import { useThemeContext } from '../../../context/themeContext';

// Types
import type { RootState } from '../../../redux/store';

interface NavInfoProps {}

const NavInfo = ({}: NavInfoProps) => {

  const { theme } = useThemeContext();
  const userName = useSelector((state: RootState) => state.user.userData!.name)

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
        <Text variant="texting5" color={theme.colors.title} as="h2">
          {userName}
        </Text>
        <Text variant="texting7" color={theme.colors.subtitle} as="h3">
          Advogada
        </Text>
      </ContainerColumn>
    </ContainerRow>
  );
};

export default NavInfo;
