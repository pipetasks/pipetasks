import { ReactNode } from 'react';
import { ContainerColumn, ContainerRow } from '../../../../assets/containers';
import { Text } from '../../../../assets/reusableItens';

interface ConfigSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ConfigSection = ({ title, subtitle, children }: ConfigSectionProps) => {
  return (
    <ContainerColumn
      align="flex-start"
      padding="1rem 0"
      gap="1rem"
      width="100%"
    >
      <Text variant="texting3" color="var(--black-800)">
        {title}
      </Text>
      <ContainerRow width="100%" height="2px" background="var(--gray-200)" />
      {!!subtitle && (
        <Text variant="texting2" color="var(--black-800)">
          {subtitle}
        </Text>
      )}
      {children}
    </ContainerColumn>
  );
};

export default ConfigSection;
