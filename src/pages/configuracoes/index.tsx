import { ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/themeContext';

interface SettingsProps {}

const Settings = (): SettingsProps => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <ContainerRow background={theme.colors.background}>
      <Sidebar />
      <button onClick={toggleTheme}>alterar thema aqui </button>
      <h1>{theme.name}</h1>
    </ContainerRow>
  );
};

export default Settings;
