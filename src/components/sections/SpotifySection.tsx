import { FaSpotify, FaCirclePlay } from "react-icons/fa6";
import goldImg from '../../assets/gold-mixtape.jpg';
import sindicatoImg from '../../assets/sindicato-dos-graves.jpg';
import riffsImg from '../../assets/riffs-de-aco.jpg';
import { useTranslation } from 'react-i18next';
import "./SpotifySection.css";

interface PlaylistProps {
  href: string;
  imgSrc: string;
  title: string;
  author: string;
}

function PlaylistCard({ href, imgSrc, title, author }: PlaylistProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="playlist-card">
      <div className="cover-wrapper">
        <img src={imgSrc} alt={title} />
        <div className="play-overlay">
          <FaCirclePlay />
        </div>
      </div>
      <div className="playlist-info">
        <h3>{title}</h3>
        <p>Playlist • {author}</p>
      </div>
    </a>
  );
}

export function SpotifySection() {
  const { t } = useTranslation();

  return (
    <div className="glass-panel spotify-container fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="spotify-header">
        <FaSpotify className="spotify-icon" />
        <h2>{t('spotify.title')}</h2>
      </div>

      <div className="playlist-cards">
        <PlaylistCard
          href="https://open.spotify.com/playlist/4hQIk1bSCFBFMdzSBAamLK?si=c0d11df4a6f64b6f"
          imgSrc={goldImg}
          title="𝔾𝕠𝕝𝕕 𝕄𝕚𝕩𝕥𝕒𝕡𝕖 𝕋𝕒𝕡𝕖 📼🎧"
          author="SrCastiell"
        />
        <PlaylistCard
          href="https://open.spotify.com/playlist/3waNenL7g1DMrnSjr8V3h1?si=93070f534984430c"
          imgSrc={sindicatoImg}
          title="𝕾𝖎𝖓𝖉𝖎𝖈𝖆𝖙𝖔 𝖉𝖔𝖘 𝕲𝖗𝖆𝖛𝖊𝖘 🎧"
          author="SrCastiell"
        />
        <PlaylistCard
          href="https://open.spotify.com/playlist/0IJIIRhon2UWUqjTF350k4?si=4432ec131a914f15"
          imgSrc={riffsImg}
          title="𝕽𝖎𝖋𝖋𝖘 𝖉𝖊 𝕬𝖈̧𝖔"
          author="SrCastiell"
        />
      </div>

      <a href="https://open.spotify.com/user/matheus.wenes" target="_blank" rel="noopener noreferrer" className="spotify-main-btn">
        {t('spotify.button')}
      </a>
    </div>
  );
}
