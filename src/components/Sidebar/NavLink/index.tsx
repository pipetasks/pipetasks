import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';
import { NavLinkProps } from './interface';

const NavLink = ({ title, notifications, href, children }: NavLinkProps) => {
  const theme = useTheme();
  return (
    <ContainerRow width="100%" align="center" justify="space-between">
      <Link href={href}>
        <a>
          <ContainerRow gap="8px" align="center">
            {/* <AiOutlineHome fontSize="1.5rem" color="var(--blue)" /> */}
            {children}
            <Text color={theme.colors.title} variant="texting5" as="h3">
              {title}
            </Text>
          </ContainerRow>
        </a>
      </Link>

      <ContainerRow
        width="1.5rem"
        align="center"
        justify="center"
        height="1.5rem"
        borderRadius="100%"
        background={theme.colors.notifications.background}
      >
        <Text
          variant="texting8"
          color={theme.colors.notifications.color}
          as="p"
        >
          {notifications}
        </Text>
      </ContainerRow>
    </ContainerRow>
  );
};

export default NavLink;
