import { FaLink, FaSpotify, FaRegFileCode } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import './NavigationTabs.css';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const { t } = useTranslation();

  const tabs = [
    { id: 'links', label: t('nav.links'), icon: FaLink },
    { id: 'spotify', label: t('nav.spotify'), icon: FaSpotify },
    { id: 'curriculum', label: t('nav.curriculum'), icon: FaRegFileCode }
  ];

  return (
    <nav className="tabs glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button 
            key={tab.id}
            className={`tab-btn ${isActive ? 'active' : ''}`} 
            onClick={() => onTabChange(tab.id)}
            type="button"
          >
            {isActive && (
              <motion.div 
                layoutId="active-tab-indicator"
                className="tab-indicator-motion"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            <span className="tab-content-wrapper">
              <Icon /> {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
