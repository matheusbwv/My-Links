import { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { NavigationTabs } from './components/NavigationTabs';
import { SocialLinks } from './components/sections/SocialLinks';
import { SpotifySection } from './components/sections/SpotifySection';
import { CurriculumSection } from './components/sections/CurriculumSection';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

const tabOrder = ['links', 'spotify', 'curriculum'];

function App() {
  const [activeTab, setActiveTab] = useState('links');
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newTab: string) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newTab);
    if (currentIndex !== newIndex) {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setActiveTab(newTab);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = tabOrder.indexOf(activeTab);
      if (currentIndex < tabOrder.length - 1) {
        setDirection(1);
        setActiveTab(tabOrder[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      const currentIndex = tabOrder.indexOf(activeTab);
      if (currentIndex > 0) {
        setDirection(-1);
        setActiveTab(tabOrder[currentIndex - 1]);
      }
    },
    trackMouse: false, // trackMouse desativado para evitar bugs no desktop
    delta: 50, // Pelo menos 50px de swipe pra prevenir mudança acidental
    swipeDuration: 500, // Evita swipe muito lento de acionar action
  });

  const slideVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' as const }
    })
  };

  return (
    <div className="app-container">
      <ProfileHeader />
      
      <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="content-area" {...handlers} style={{ overflow: 'hidden', position: 'relative' }}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="tab-pane-container"
          >
            {activeTab === 'links' && <SocialLinks />}
            {activeTab === 'spotify' && <SpotifySection />}
            {activeTab === 'curriculum' && <CurriculumSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Matheus Wenes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
