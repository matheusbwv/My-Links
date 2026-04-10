import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher-container">
      <div className="glass-panel switcher-panel">
        <button 
          className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`}
          onClick={() => changeLanguage('pt')}
          title="Português"
        >
          <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="flag-icon" />
        </button>
        <div className="divider" />
        <button 
          className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          title="English"
        >
          <img src="https://flagcdn.com/w40/us.png" alt="USA" className="flag-icon" />
        </button>
      </div>
    </div>
  );
}
