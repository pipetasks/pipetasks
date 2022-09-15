import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { ContainerRow } from '../../../assets/containers';
import { Text } from '../../../assets/reusableItens';

interface NavLinkProps {}

const NavLink = ({}: NavLinkProps) => {
  const theme = useTheme();
  return (
    <ContainerRow width="100%" align="center" justify="space-between">
      <Link href="/dashboard">
        <a>
          <ContainerRow gap="8px" align="center">
            <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
            <Text color={theme.colors.title} variant="texting5">
              Home
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
        <Text variant="texting8" color={theme.colors.notifications.color}>
          1
        </Text>
      </ContainerRow>
    </ContainerRow>
  );
};

export default NavLink;
