import { ReactNode } from 'react';
import { SectionVariant } from '@/types/section';

interface SectionConfig {
  Component: React.ComponentType<any>;
  props?: Record<string, any>;
}

interface SectionWrapperProps {
  sections: SectionConfig[];
}

export function SectionWrapper({ sections }: SectionWrapperProps) {
  return (
    <>
      {sections.map((section, index) => {
        const { Component, props = {} } = section;
        const variant: SectionVariant = index % 2 === 0 ? 'default' : 'alternate';
        
        return (
          <Component
            key={index}
            {...props}
            variant={variant}
          />
        );
      })}
    </>
  );
} 