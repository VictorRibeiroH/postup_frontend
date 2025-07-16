import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 8px #0001',
      padding: 0,
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5rem 2rem',
        height: 72
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '8px',
            backgroundColor: '#FF6B35',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            📈
          </div>
          <span style={{ fontWeight: 700, fontSize: 24, color: '#FF7A3D', letterSpacing: -1 }}>{t.header.logo}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#funcionalidades" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>{t.header.funcionalidades}</a></li>
            <li><a href="#planos" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>{t.header.planos}</a></li>
            <li><a href="#fale-conosco" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>{t.header.faleConosco}</a></li>
          </ul>
          <a href="#acessar" style={{
            background: 'linear-gradient(90deg, #FF7A3D 0%, #FFB86C 100%)',
            color: '#fff',
            fontWeight: 700,
            padding: '0.75rem 2rem',
            borderRadius: 24,
            boxShadow: '0 4px 16px #FF7A3D33',
            textDecoration: 'none',
            fontSize: 16,
            transition: 'filter 0.2s',
            filter: 'drop-shadow(0 2px 8px #FF7A3D22)'
          }}>{t.header.acessar}</a>
        </div>
      </nav>
    </header>
  );
}; 