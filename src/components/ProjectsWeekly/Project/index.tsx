import { AiOutlineComment } from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import { useThemeContext } from '../../../context/themeContext';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  const { theme } = useThemeContext();
  return (
    <ContainerRow
      align="center"
      justify="space-between"
      padding="1rem"
      gap="1.5rem"
      width="100%"
      background={theme.colors.tasks.background}
      borderRadius="1rem"
    >
      <ContainerRow gap="1.5rem" align="center">
        <FaTasks color="var(--blue)" />
        <ContainerColumn justify="center" align="flex-start" gap="8px">
          <Text variant="texting2" color={theme.colors.title} as="h2">
            Nome do projeto
          </Text>

          <ContainerRow gap="8px" align="center">
            <BsCalendarWeek fontSize="0.75rem" color={theme.colors.subtitle} />
            <Text variant="texting7" color={theme.colors.subtitle} as="p">
              01/06/2022
            </Text>
            <Text variant="texting7" color={theme.colors.subtitle} as="p">
              |
            </Text>
            <AiOutlineComment
              fontSize="0.75rem"
              color={theme.colors.subtitle}
            />
            <Text variant="texting7" color={theme.colors.subtitle} as="p">
              9 Comentários
            </Text>
          </ContainerRow>
        </ContainerColumn>
      </ContainerRow>

      <Text
        variant="texting7"
        color={theme.colors.title}
        mw="13.125rem"
        align="left"
        as="p"
      >
        Descriçao básica do projeto com um limite de caracteres
      </Text>

      <ContainerColumn justify="center" gap="8px">
        <Text variant="texting6" color={theme.colors.subtitle} as="p">
          Colaboradores
        </Text>
        <ContainerRow align="center" gap="8px">
          <ContainerRow
            width="32px"
            height="32px"
            background="blue"
            borderRadius="100%"
          />
        </ContainerRow>
      </ContainerColumn>

      <ContainerColumn align="flex-start" justify="center" gap="8px">
        <Text variant="texting6" color={theme.colors.title} as="p">
          50% completo
        </Text>
        <progress value={50} max={100}>
          50
        </progress>
      </ContainerColumn>

      <ContainerRow
        width="50px"
        height="50px"
        borderRadius="100%"
        background="var(--blue)"
      />
    </ContainerRow>
  );
};

export default Project;
