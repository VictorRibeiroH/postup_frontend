import { Box, Typography } from '@mui/material';

interface MetricCardProps {
  icon: string; // Alterado para string para aceitar emoji
  title: string;
  value: string | number;
}

export const MetricCard = ({ icon, title, value }: MetricCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        height: '100%'
      }}
    >
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #FF6B35, #FF8A65)',
          borderRadius: '12px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          width: '48px',
          height: '48px'
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography 
          sx={{ 
            color: '#666',
            fontSize: '0.875rem',
            mb: 1
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#333',
            fontWeight: 700,
            fontSize: '1.75rem'
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}; 