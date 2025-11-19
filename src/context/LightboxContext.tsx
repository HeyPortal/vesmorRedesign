import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LightboxContextType {
  isOpen: boolean;
  imageSrc: string;
  altText: string;
  openLightbox: (src: string, alt?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [altText, setAltText] = useState('');

  const openLightbox = (src: string, alt: string = '') => {
    setImageSrc(src);
    setAltText(alt);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImageSrc('');
    setAltText('');
  };

  return (
    <LightboxContext.Provider value={{ isOpen, imageSrc, altText, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
