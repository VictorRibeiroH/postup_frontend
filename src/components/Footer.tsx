import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div style={{ padding: '80px 60px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          <span className="text-white text-3xl" style={{ display: 'inline-block', fontWeight: 'bold', fontSize: '26px' }}>PostUp</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <span style={{ color: '#FF6B35', fontWeight: 'bold' }}>FM Marketing</span>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer; 