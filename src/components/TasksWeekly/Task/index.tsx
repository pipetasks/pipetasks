import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../assets/containers';
import { FaTasks } from 'react-icons/fa';
import { Text } from '../../../assets/reusableItens';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';

interface TaskProps {}

const Task = ({}: TaskProps) => {
  const theme = useTheme();

  return (
    <ContainerRow
      justify="space-between"
      align="center"
      gap="1.5rem"
      padding="1rem"
      background={theme.colors.tasks.background}
      borderRadius="1rem"
      width="100%"
    >
      <ContainerRow gap="1.5rem" align="center">
        <FaTasks color="var(--blue)" />
        <ContainerColumn justify="center" align="flex-start" gap="8px">
          <Text variant="texting2" color={theme.colors.title}>
            Nome do projeto
          </Text>
          <Text variant="texting6" color={theme.colors.title}>
            Nome da tarefa
          </Text>
          <ContainerRow gap="8px">
            <BsCalendarWeek fontSize="0.75rem" color={theme.colors.subtitle} />
            <Text variant="texting7" color={theme.colors.subtitle}>
              Data de inicio
            </Text>
            <Text variant="texting7" color={theme.colors.subtitle}>
              |
            </Text>
            <AiOutlineComment
              fontSize="0.75rem"
              color={theme.colors.subtitle}
            />
            <Text variant="texting7" color={theme.colors.subtitle}>
              9 Comentários
            </Text>
          </ContainerRow>
        </ContainerColumn>
      </ContainerRow>

      <ContainerColumn justify="center" gap="8px">
        Colaboradores
      </ContainerColumn>

      <ContainerColumn justify="center" gap="8px" align="flex-start">
        Data de vencimento
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

export default Task;
