import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface DynamicContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    badge: string;
    stats: {
      days: string;
      days_label: string;
      guarantee: string;
      guarantee_label: string;
      coaching: string;
      coaching_label: string;
    };
  };
  program: {
    title: string;
    description: string;
    confirmation: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    guarantee: {
      title: string;
      description: string;
    };
  };
  creator: {
    title: string;
    description: string;
    bio: string[];
    stats: {
      clients: string;
      clients_label: string;
      experience: string;
      experience_label: string;
      success_rate: string;
      success_rate_label: string;
    };
    cta: string;
  };
  cta: {
    title: string;
    description: string;
    urgency: string;
    urgency_description: string;
    primary_button: string;
    secondary_button: string;
    benefit1_label: string;
    benefit2_label: string;
    benefit3_label: string;
  };
}

interface ContentContextType {
  content: DynamicContent | null;
  setContent: (content: DynamicContent) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<DynamicContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ContentContext.Provider value={{ content, setContent, isLoading, setIsLoading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};