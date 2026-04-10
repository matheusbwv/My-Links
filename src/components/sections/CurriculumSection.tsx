import { FaUserGraduate, FaTerminal, FaBriefcase, FaGamepad, FaPython, FaLaravel, FaJava, FaJs, FaLinux } from "react-icons/fa6";
import { useTranslation, Trans } from 'react-i18next';
import "./CurriculumSection.css";

export function CurriculumSection() {
  const { t } = useTranslation();

  return (
    <div className="glass-panel cv-container fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="cv-hero">
        <div className="hero-icon">
          <FaUserGraduate />
        </div>
        <div className="hero-text">
          <h2>{t('curriculum.academic.title')}</h2>
          <p className="semester">{t('curriculum.academic.institution')}</p>
        </div>
      </div>

      <div className="cv-section compact">
        <h3><FaGamepad /> {t('curriculum.description.title')}</h3>
        <p className="about-text">
          <Trans i18nKey="curriculum.description.text">
            Sou um profissional com experiência em suporte técnico, atualmente colaborador na
            <strong> TIVIT</strong>, atuando na instalação, configuração e manutenção de sistemas
            e equipamentos. Habilidade em atendimento ao usuário e resolução de problemas com agilidade.
            Conhecimento em informática, redes e boas práticas de TI. Facilidade para trabalho em equipe
            e boa comunicação. Comprometido com a eficiência e o funcionamento adequado dos sistemas.
          </Trans>
        </p>
      </div>

      <div className="cv-section">
        <h3><FaBriefcase /> {t('curriculum.experience.title')}</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>{t('curriculum.experience.items.tivit.company')}</h4>
            <span className="timeline-date">{t('curriculum.experience.current')}</span>
            <p><strong>{t('curriculum.experience.items.tivit.role')}:</strong> {t('curriculum.experience.items.tivit.description')}</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>{t('curriculum.experience.items.lamic.company')}</h4>
            <span className="timeline-date">07/2025 - 10/2025</span>
            <p><strong>{t('curriculum.experience.items.lamic.role')}:</strong> {t('curriculum.experience.items.lamic.description')}</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>{t('curriculum.experience.items.edn.company')}</h4>
            <span className="timeline-date">02/2025 - 05/2025</span>
            <p><strong>{t('curriculum.experience.items.edn.role')}:</strong> {t('curriculum.experience.items.edn.description')}</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>{t('curriculum.experience.items.nexti.company')}</h4>
            <span className="timeline-date">09/2023 - 12/2024</span>
            <p><strong>{t('curriculum.experience.items.nexti.role')}:</strong> {t('curriculum.experience.items.nexti.description')}</p>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3><FaTerminal /> {t('curriculum.skills.title')}</h3>
        <div className="skills-grid">
          <div className="skill-tag"><FaPython/> Django / Python</div>
          <div className="skill-tag"><FaLaravel/> PHP / Laravel</div>
          <div className="skill-tag"><FaJava/> Java</div>
          <div className="skill-tag"><FaJs/> JavaScript / TS</div>
          <div className="skill-tag"><FaLinux/> Linux / Servidores</div>
        </div>
      </div>
    </div>
  );
}
