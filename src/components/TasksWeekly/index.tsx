import { ContainerColumn } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { useThemeContext } from '../../context/themeContext';
import Task from './Task';

interface TasksWeeklyProps {}

const TasksWeekly = ({}: TasksWeeklyProps) => {
  const { theme } = useThemeContext();
  return (
    <ContainerColumn
      gap="1rem"
      padding="1rem 0"
      width="100%"
      align="flex-start"
    >
      <Text variant="texting3" color={theme.colors.tasks.color}>
        Tarefas próximas a vencer
      </Text>
      <Task />
      <Task />
    </ContainerColumn>
  );
};

export default TasksWeekly;
