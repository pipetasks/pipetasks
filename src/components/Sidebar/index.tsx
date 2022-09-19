import { ContainerColumn } from '../../assets/containers';
import NavInfo from './NavInfo';
import NavSection from './NavSection';
import NavHeader from './NavHeader';
import NavLink from './NavLink';
import { AiOutlineHome, AiOutlinePieChart } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { BsCheckAll } from 'react-icons/bs';
import { SideBarContainer } from './styles';

const Sidebar = () => {
  return (
    <SideBarContainer
      align="center"
      gap="1.5rem"
      borderRight="1px solid var(--gray-800)"
      as="aside"
    >
      <NavHeader />

      <ContainerColumn
        align="center"
        gap="1.5rem"
        padding="0 2rem"
        width="100%"
      >
        <NavInfo />

        <NavSection title="dashboards">
          <NavLink title="Home" notifications={1} href="/dashboard">
            <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Analytics" notifications={12} href="/analytics">
            <AiOutlinePieChart fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink
            title="Configurações"
            notifications={13}
            href="/configuracoes"
          >
            <GoSettings fontSize="1.5rem" color="var(--blue)" rotate="180deg" />
          </NavLink>
        </NavSection>

        <NavSection title="projetos">
          <NavLink title="Projeto1" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Projeto12" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Projeto13" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
        </NavSection>
      </ContainerColumn>
    </SideBarContainer>
  );
};

export default Sidebar;
