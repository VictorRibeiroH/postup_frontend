import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <h1 style={titleStyle}>
            <span style={{ color: '#222' }}>Seja </span>
            <span style={{ color: '#FF7A3D' }}>Você </span>
            <span style={{ color: '#222' }}>sua </span>
            <span style={{ color: '#FF7A3D' }}>Agência de Marketing Digital</span>
          </h1>
          <p style={descStyle}>{t.home.description}</p>
        </div>
        <div style={formWrapperStyle}>
          <input type="text" placeholder={t.home.form.name} style={inputStyle} />
          <input type="email" placeholder={t.home.form.email} style={inputStyle} />
          <input type="text" placeholder={t.home.form.whatsapp} style={inputStyle} />
          <select style={inputStyle} defaultValue="">
            <option value="" disabled>{t.home.form.segment}</option>
            <option value="alimentacao">Alimentação</option>
            <option value="saude">Saúde</option>
            <option value="esporte">Esporte</option>
            <option value="estetica">Estética</option>
            <option value="beleza">Beleza e bem estar</option>
            <option value="advocacia">Advocacia</option>
            <option value="arquitetura">Arquitetura</option>
            <option value="imoveis">Imóveis</option>
            <option value="pet">Pet</option>
            <option value="moda">Moda</option>
          </select>
          <textarea placeholder={t.home.form.message} style={{ ...inputStyle, minHeight: 64, resize: 'vertical' }} />
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 13, color: '#fff', marginTop: 8 }}>
            <input type="checkbox" style={{ marginRight: 8 }} />
            <span>
              {t.home.form.terms} <a href="#" style={{ color: '#FFB86C' }}>{t.home.form.termsLink}</a> e <a href="#" style={{ color: '#FFB86C' }}>{t.home.form.privacyLink}</a>
            </span>
          </div>
          <button style={buttonStyle}>{t.home.form.submit}</button>
        </div>
      </div>
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  width: '100vw',
  minHeight: 'calc(100vh - 72px)',
  background: '#f7f8fa',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  overflowX: 'hidden',
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 48,
  padding: '4rem 2rem 2rem 2rem',
  flexWrap: 'wrap',
};

const leftStyle: React.CSSProperties = {
  maxWidth: 520,
  flex: 1,
  minWidth: 320,
  marginRight: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 96, // aumentado para centralizar melhor
};

const titleStyle: React.CSSProperties = {
  fontSize: '3.8rem', // aumentado em 10px
  fontWeight: 700,
  lineHeight: 1.08,
  margin: 0,
  marginBottom: 16,
  wordBreak: 'break-word',
  letterSpacing: -1,
};

const descStyle: React.CSSProperties = {
  fontSize: '1.7rem', // aumentado em 10px
  color: '#444',
  marginTop: 0,
  marginBottom: 0,
};

const formWrapperStyle: React.CSSProperties = {
  background: '#181818',
  borderRadius: 24,
  padding: '2rem 2rem 1.5rem 2rem',
  minWidth: 340,
  maxWidth: 400,
  width: '100%',
  boxShadow: '0 8px 32px #0002',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 0,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: 8,
  border: 'none',
  background: '#232323',
  color: '#fff',
  fontSize: 16,
  marginBottom: 0,
  outline: 'none',
  marginTop: 0,
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '1.1rem 0',
  borderRadius: 12,
  border: 'none',
  background: 'linear-gradient(90deg, #FF7A3D 0%, #FFB86C 100%)',
  color: '#fff',
  fontWeight: 700,
  fontSize: 20,
  marginTop: 8,
  boxShadow: '0 4px 16px #FF7A3D33',
  cursor: 'pointer',
  transition: 'filter 0.2s',
  letterSpacing: 1,
}; 