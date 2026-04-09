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
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Verifica se é um swipe horizontal intencional
    // diffX > 50px de distância E movimento horizontal deve ser maior que o vertical
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      const currentIndex = tabOrder.indexOf(activeTab);
      if (diffX > 0 && currentIndex < tabOrder.length - 1) {
        setActiveTab(tabOrder[currentIndex + 1]);
      } else if (diffX < 0 && currentIndex > 0) {
        setActiveTab(tabOrder[currentIndex - 1]);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
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
