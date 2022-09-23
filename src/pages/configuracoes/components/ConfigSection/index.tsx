import { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../../assets/containers';
import { Text } from '../../../../assets/reusableItens';

interface ConfigSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ConfigSection = ({ title, subtitle, children }: ConfigSectionProps) => {
  const theme = useTheme();
  return (
    <ContainerColumn
      align="flex-start"
      padding="1rem 0"
      gap="1rem"
      width="100%"
    >
      <Text variant="texting3" color={theme.colors.title}>
        {title}
      </Text>
      <ContainerRow
        width="100%"
        height="2px"
        background={theme.colors.divider}
      />
      {!!subtitle && (
        <Text variant="texting2" color={theme.colors.subtitle} as="h2">
          {subtitle}
        </Text>
      )}
      {children}
    </ContainerColumn>
  );
};

export default ConfigSection;
