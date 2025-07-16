import { Box, Typography } from '@mui/material';

interface FeatureCardProps {
  icon: string;
  title: string;
}

export const FeatureCard = ({ icon, title }: FeatureCardProps) => {
  const highlightColor = '#FF7757';

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px 20px', // Reduzido o padding
        display: 'flex',
        alignItems: 'center',
        gap: 2, // Reduzido o gap
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        width: '100%',
        minHeight: '72px', // Reduzido a altura mínima
        border: '2px solid transparent',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
          border: `2px solid ${highlightColor}`
        }
      }}
    >
      <Box 
        sx={{ 
          fontSize: '1.5rem', // Reduzido o tamanho do ícone
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px', // Reduzido o tamanho do container do ícone
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 119, 87, 0.1)'
        }}
      >
        {icon}
      </Box>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#2C3E50',
          fontWeight: 700,
          flex: 1,
          fontSize: '0.95rem', // Reduzido o tamanho da fonte
          lineHeight: '1.2'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}; 