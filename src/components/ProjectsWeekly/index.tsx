import { ContainerColumn } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { useThemeContext } from '../../context/themeContext';
import Project from './Project';

interface ProjectsWeeklyProps {}

const ProjectsWeekly = ({}: ProjectsWeeklyProps) => {
  const { theme } = useThemeContext();
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
