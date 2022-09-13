import { ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';

interface SettingsProps {}

const Settings = (): SettingsProps => {
  const theme = useTheme();

  console.log(theme);
  return (
    <ContainerRow background="var(--white-100)">
      <Sidebar />
    </ContainerRow>
  );
};

export default Settings;
