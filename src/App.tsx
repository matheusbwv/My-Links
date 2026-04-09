import { useState, useRef } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { NavigationTabs } from './components/NavigationTabs';
import { SocialLinks } from './components/sections/SocialLinks';
import { SpotifySection } from './components/sections/SpotifySection';
import { CurriculumSection } from './components/sections/CurriculumSection';
import './App.css';

const tabOrder = ['links', 'spotify', 'curriculum'];

function App() {
  const [activeTab, setActiveTab] = useState('links');
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      const currentIndex = tabOrder.indexOf(activeTab);
      if (diff > 0 && currentIndex < tabOrder.length - 1) {
        setActiveTab(tabOrder[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        setActiveTab(tabOrder[currentIndex - 1]);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="app-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <ProfileHeader />
      
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="content-area">
        {activeTab === 'links' && (
          <section id="links" className="tab-pane active" style={{ animation: 'fade-in 0.4s ease forwards' }}>
            <SocialLinks />
          </section>
        )}
        
        {activeTab === 'spotify' && (
          <section id="spotify" className="tab-pane active" style={{ animation: 'fade-in 0.4s ease forwards' }}>
            <SpotifySection />
          </section>
        )}
        
        {activeTab === 'curriculum' && (
          <section id="curriculum" className="tab-pane active" style={{ animation: 'fade-in 0.4s ease forwards' }}>
            <CurriculumSection />
          </section>
        )}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Matheus Wenes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
