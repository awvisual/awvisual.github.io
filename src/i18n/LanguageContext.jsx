import React, { createContext, useContext, useState, useCallback } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('aw-language');
        return saved || 'nl';
    });

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => {
            const next = prev === 'nl' ? 'en' : 'nl';
            localStorage.setItem('aw-language', next);
            return next;
        });
    }, []);

    const t = useCallback((key) => {
        return translations[language]?.[key] || translations['en']?.[key] || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
