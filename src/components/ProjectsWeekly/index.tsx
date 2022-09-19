import { ThemeConsumer, useTheme } from 'styled-components';
import { ContainerColumn } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import Project from './Project';

interface ProjectsWeeklyProps {}

const ProjectsWeekly = ({}: ProjectsWeeklyProps) => {
  const theme = useTheme();
  return (
    <ContainerColumn
      padding="1rem 0"
      gap="1rem"
      width="100%"
      align="flex-start"
    >
      <Text variant="texting3" color={theme.colors.title}>
        Projetos em andamento
      </Text>
      <Project />
      <Project />
    </ContainerColumn>
  );
};

export default ProjectsWeekly;
