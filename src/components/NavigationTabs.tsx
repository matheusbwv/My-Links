import { useState, useEffect } from 'react';
import { FaLink, FaSpotify, FaRegFileCode } from "react-icons/fa6";
import './NavigationTabs.css';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    // A slight delay to ensure fonts and layout are loaded
    const updateIndicator = () => {
      const activeElement = document.querySelector('.tab-btn.active') as HTMLElement;
      if (activeElement) {
        setIndicatorStyle({
          width: activeElement.offsetWidth,
          left: activeElement.offsetLeft,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    // Fallback update after layout shift
    const timeoutId = setTimeout(updateIndicator, 100);

    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timeoutId);
    };
  }, [activeTab]);

  return (
    <nav className="tabs glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
      <button 
        className={`tab-btn ${activeTab === 'links' ? 'active' : ''}`} 
        onClick={() => onTabChange('links')}
      >
        <FaLink /> Links
      </button>
      <button 
        className={`tab-btn ${activeTab === 'spotify' ? 'active' : ''}`} 
        onClick={() => onTabChange('spotify')}
      >
        <FaSpotify /> Playlists
      </button>
      <button 
        className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`} 
        onClick={() => onTabChange('curriculum')}
      >
        <FaRegFileCode /> Currículo
      </button>
      
      <div 
        className="tab-indicator" 
        style={{ 
          width: `${indicatorStyle.width}px`, 
          transform: `translateX(${indicatorStyle.left}px)` 
        }}
      />
    </nav>
  );
}
