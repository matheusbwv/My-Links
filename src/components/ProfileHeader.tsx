import perfilImg from '../assets/perfil.png';
import './ProfileHeader.css';

export function ProfileHeader() {
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
      <p className="role">Back-end Developer & Gamer</p>
      <div className="status-badge">
        <span className="pulse"></span> Disponível & Online
      </div>
    </header>
  );
}
