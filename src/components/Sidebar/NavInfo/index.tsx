import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

const NavInfo = () => {
  return (
    <ContainerRow
      justify="space-between"
      padding="0 1rem"
      width="100%"
      borderBottom="solid 1px var(--gray-200)"
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
        <Text variant="texting5" color="var(--black-800)">
          Natalia Nunes
        </Text>
        <Text variant="texting7" color="var(--gray-600)">
          Advogada
        </Text>
      </ContainerColumn>
    </ContainerRow>
  );
};

export default NavInfo;
