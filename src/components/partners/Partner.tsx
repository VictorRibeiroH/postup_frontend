import { Box } from '@mui/material';

interface PartnerProps {
  name: string;
  logo: React.ReactNode;
}

export const Partner = ({ name, logo }: PartnerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        filter: 'grayscale(100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          filter: 'grayscale(0%)',
          opacity: 1
        }
      }}
    >
      {logo}
    </Box>
  );
}; 