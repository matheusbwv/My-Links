import { FaUserGraduate, FaTerminal, FaBriefcase, FaGamepad, FaPython, FaLaravel, FaJava, FaJs, FaLinux } from "react-icons/fa6";
import "./CurriculumSection.css";

export function CurriculumSection() {
  return (
    <div className="glass-panel cv-container fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="cv-hero">
        <div className="hero-icon">
          <FaUserGraduate />
        </div>
        <div className="hero-text">
          <h2>Sistemas de Informação</h2>
          <p className="semester">Centro Universitário Paraíso - UniFAP</p>
        </div>
      </div>

      <div className="cv-section compact">
        <h3><FaGamepad /> Descrição</h3>
        <p className="about-text">
          Atualmente cursando Sistemas de Informação na UniFAP e colaborador da
          <strong> TIVIT</strong>.
          Minha base profissional foca em infraestrutura, suporte corporativo e principalmente no
          <strong> desenvolvimento Back-end</strong> (criação de sistemas empresariais, Django,
          metodologias ágeis SCRUM e Design Thinking).
          Gamer nas horas vagas explorando Zelda, LoL e Terraria.
        </p>
      </div>

      <div className="cv-section">
        <h3><FaBriefcase /> Experiência Profissional</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>TIVIT</h4>
            <span className="timeline-date">Atual</span>
            <p><strong>Suporte de TI (Help Desk):</strong> Atuação no gerenciamento de chamados corporativos e garantia de SLAs de atendimento. Responsável pela resolução ágil de incidentes focados em redes e infraestrutura geral de TI, assegurando a estabilidade operacional.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Laboratório LAMIC</h4>
            <span className="timeline-date">07/2025 - 10/2025</span>
            <p><strong>Suporte de TI:</strong> Atendimento aos usuários (clientes internos e
              externos), resolução de problemas técnicos, instalação e configuração de sistemas.
            </p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>EDN Soluções</h4>
            <span className="timeline-date">02/2025 - 05/2025</span>
            <p><strong>Técnico de TI Júnior I:</strong> Suporte técnico e atendimento.
              Acompanhamento integral para garantir que o sistema funcione adequadamente no
              ambiente do usuário.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>NExTI - UniFAP</h4>
            <span className="timeline-date">09/2023 - 12/2024</span>
            <p><strong>Estágio Dev Backend I (Django):</strong> Desenvolvedor com experiência na
              criação e implementação de sistemas empresariais escálaveis usando Django, além de
              vivência técnica em projetos com PHP (Laravel) e TS/JS.</p>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3><FaTerminal /> Tecnologias & Stack</h3>
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
