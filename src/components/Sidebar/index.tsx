import { ContainerColumn } from '../../assets/containers';
import NavInfo from './NavInfo';
import NavSection from './NavSection';
import NavHeader from './NavHeader';
import NavLink from './NavLink';
import {
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineProject,
} from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { SideBarContainer } from './styles';
import { FaTasks } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
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
            <NavLink title="Tasks" notifications={4} href="/tasks">
              <FaTasks fontSize="1.5rem" color="var(--blue)" />
            </NavLink>
            <NavLink title="Analytics" notifications={12} href="/analytics">
              <AiOutlinePieChart fontSize="1.5rem" color="var(--blue)" />
            </NavLink>
            <NavLink
              title="Configurações"
              notifications={13}
              href="/configuracoes"
            >
              <GoSettings fontSize="1.5rem" color="var(--blue)" />
            </NavLink>
          </NavSection>

          <NavSection title="projetos">
            <NavLink title="Projeto1" notifications={12} href="/dashboard">
              <AiOutlineProject
                fontSize="1.5rem"
                color="var(--blue)"
                transform="rotate(180)"
              />
            </NavLink>
            <NavLink title="Projeto12" notifications={12} href="/dashboard">
              <AiOutlineProject
                fontSize="1.5rem"
                color="var(--blue)"
                transform="rotate(180)"
              />
            </NavLink>
            <NavLink title="Projeto13" notifications={12} href="/dashboard">
              <AiOutlineProject
                fontSize="1.5rem"
                color="var(--blue)"
                transform="rotate(180)"
              />
            </NavLink>
          </NavSection>
        </ContainerColumn>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
