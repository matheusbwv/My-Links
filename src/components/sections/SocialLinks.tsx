import { FaGithub, FaLinkedin, FaInstagram, FaChevronRight } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import React, { useRef } from "react";
import "./SocialLinks.css";

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: string;
  brandClass?: string;
}

function LinkItem({ href, icon, title, subtitle, delay, brandClass = "" }: LinkItemProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    
    // Only apply on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <a 
      ref={cardRef}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="glass-btn social-btn fade-in-up" 
      style={{ animationDelay: delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`icon-box ${brandClass}`}>{icon}</div>
      <div className="btn-text">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
      <FaChevronRight className="chevron" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="social-grid">
      <LinkItem 
        href="https://github.com/matheusbwv"
        icon={<FaGithub />}
        title="GitHub"
        subtitle="@matheusbwv"
        delay="0.3s"
      />
      <LinkItem 
        href="https://www.linkedin.com/in/matheuswenes/"
        icon={<FaLinkedin />}
        title="LinkedIn"
        subtitle="Matheus Barros Wenes Vieira"
        delay="0.4s"
        brandClass="linkedin-icon"
      />
      <LinkItem 
        href="mailto:matheus.wenes@gmail.com"
        icon={<SiGmail />}
        title="Email"
        subtitle="matheus.wenes@gmail.com"
        delay="0.5s"
        brandClass="gmail-icon"
      />
      <LinkItem 
        href="https://www.instagram.com/matheuswenes/"
        icon={<FaInstagram />}
        title="Instagram"
        subtitle="@matheuswenes"
        delay="0.6s"
        brandClass="instagram-icon"
      />
    </div>
  );
}
