import perfilImg from '../assets/perfil.png';
import { FaRocket } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ProfileHeader.css';

export function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <header className="profile-header fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="avatar-container">
        <img 
          src={perfilImg} 
          alt="Matheus Wenes" 
          className="avatar"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://ui-avatars.com/api/?name=Matheus+Wenes&background=111&color=fff&size=200';
          }}
        />
      </div>
      <h1 className="name">Math<span className="text-glow">eu</span>s Wenes</h1>
      <p className="role">{t('profile.role')}</p>
      
      <motion.div 
        className="status-badge phrase-badge"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span 
          className="rocket-icon"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaRocket />
        </motion.span> 
        <span>{t('profile.status')}</span>
      </motion.div>
    </header>
  );
}
